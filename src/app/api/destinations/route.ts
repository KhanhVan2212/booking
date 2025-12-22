import { NextRequest, NextResponse } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../../../../payload.config';

export const dynamic = 'force-dynamic';

// GET - Lấy danh sách destinations hoặc tìm theo slug
export async function GET(request: NextRequest) {
  try {
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    const url = new URL(request.url);
    const featured = url.searchParams.get('featured');
    const limit = url.searchParams.get('limit');
    const includeAll = url.searchParams.get('includeAll'); // Cho admin
    const slug = url.searchParams.get('slug'); // Tìm theo slug qua query param

    // Nếu có slug, tìm destination cụ thể
    if (slug) {
      const destinations = await payload.find({
        collection: 'destinations',
        where: {
          slug: {
            equals: slug,
          },
          status: {
            equals: 'published',
          },
        },
        limit: 1,
      });

      if (destinations.docs.length === 0) {
        return NextResponse.json({
          success: false,
          error: 'Destination not found'
        }, { status: 404 });
      }

      return NextResponse.json({
        success: true,
        destination: destinations.docs[0],
      });
    }

    // Lấy danh sách destinations
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

    const destinations = await payload.find({
      collection: 'destinations',
      where,
      limit: limit ? parseInt(limit) : 100,
      sort: '-createdAt',
    });

    return NextResponse.json({
      success: true,
      destinations: destinations.docs,
      totalDocs: destinations.totalDocs,
    });
  } catch (error) {
    console.error('Get destinations error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch destinations'
    }, { status: 500 });
  }
}

// POST - Tạo destination mới (chỉ admin)
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

    // Verify token
    const { user } = await payload.auth({ headers: request.headers });
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    const body = await request.json();

    // Prepare data object
    const createData: any = {
      name: body.name,
      slug: body.slug,
      price: body.price,
      status: body.status || 'draft',
    };

    // Ưu tiên featuredImage (upload), không thì dùng imageUrl
    if (body.featuredImage) {
      createData.featuredImage = body.featuredImage;
    } else if (body.imageUrl) {
      createData.imageUrl = body.imageUrl;
    }

    if (body.description) {
      createData.description = body.description;
    }

    if (body.featured !== undefined) {
      createData.featured = body.featured;
    }

    const destination = await payload.create({
      collection: 'destinations',
      data: createData,
    });

    return NextResponse.json({
      success: true,
      destination,
    });
  } catch (error) {
    console.error('Create destination error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create destination'
    }, { status: 500 });
  }
}