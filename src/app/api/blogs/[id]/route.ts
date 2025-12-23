// app/api/blogs/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../../../../../payload.config';

export const dynamic = 'force-dynamic';

// GET - Lấy blog theo ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    const blog = await payload.findByID({
      collection: 'blogs',
      id,
    });

    if (!blog) {
      return NextResponse.json({
        success: false,
        error: 'Blog not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error('Get blog error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch blog'
    }, { status: 500 });
  }
}

// PATCH - Cập nhật blog
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;
    const body = await request.json();

    const updateData: any = {
      title: body.title,
      slug: body.slug,
      category: body.category,
      content: body.content,
      excerpt: body.excerpt,
      author: body.author,
      readTime: body.readTime,
      featured: body.featured,
      status: body.status,
    };

    if (body.tags) {
      updateData.tags = body.tags;
    }

    if (body.featuredImage) {
      updateData.featuredImage = body.featuredImage;
    } else if (body.imageUrl) {
      updateData.imageUrl = body.imageUrl;
    }

    const blog = await payload.update({
      collection: 'blogs',
      id,
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error('Update blog error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update blog'
    }, { status: 500 });
  }
}

// DELETE - Xóa blog
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params;

    await payload.delete({
      collection: 'blogs',
      id,
    });

    return NextResponse.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Delete blog error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete blog'
    }, { status: 500 });
  }
}