// app/api/blogs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../../../../payload.config';

export const dynamic = 'force-dynamic';

// GET - Lấy danh sách blogs
export async function GET(request: NextRequest) {
  try {
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    const url = new URL(request.url);
    const featured = url.searchParams.get('featured');
    const limit = url.searchParams.get('limit');
    const category = url.searchParams.get('category');
    const includeAll = url.searchParams.get('includeAll'); // Cho admin

    const where: any = {};

    // Nếu không phải admin, chỉ lấy published
    if (includeAll !== 'true') {
      where.status = {
        equals: 'published',
      };
    }

    if (featured === 'true') {
      where.featured = {
        equals: true,
      };
    }

    if (category) {
      where.category = {
        equals: category,
      };
    }

    const blogs = await payload.find({
      collection: 'blogs',
      where,
      limit: limit ? parseInt(limit) : 100,
      sort: '-createdAt',
    });

    return NextResponse.json({
      success: true,
      blogs: blogs.docs,
      totalDocs: blogs.totalDocs,
    });
  } catch (error) {
    console.error('Get blogs error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch blogs'
    }, { status: 500 });
  }
}

// POST - Tạo blog mới (chỉ admin)
export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    const { user } = await payload.auth({ headers: request.headers });
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    const body = await request.json();

    const createData: any = {
      title: body.title,
      slug: body.slug,
      category: body.category,
      content: body.content,
      status: body.status || 'draft',
    };

    if (body.excerpt) createData.excerpt = body.excerpt;
    if (body.author) createData.author = body.author;
    if (body.readTime) createData.readTime = body.readTime;
    if (body.tags) createData.tags = body.tags;
    if (body.featured !== undefined) createData.featured = body.featured;

    if (body.featuredImage) {
      createData.featuredImage = body.featuredImage;
    } else if (body.imageUrl) {
      createData.imageUrl = body.imageUrl;
    }

    const blog = await payload.create({
      collection: 'blogs',
      data: createData,
    });

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error('Create blog error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create blog'
    }, { status: 500 });
  }
}