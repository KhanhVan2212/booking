import { NextRequest, NextResponse } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../../../../../payload.config';

export const dynamic = 'force-dynamic';

// GET - Lấy destination theo ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    const destination = await payload.findByID({
      collection: 'destinations',
      id,
    });

    if (!destination) {
      return NextResponse.json({
        success: false,
        error: 'Destination not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      destination,
    });
  } catch (error) {
    console.error('Get destination error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch destination'
    }, { status: 500 });
  }
}

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
      name: body.name,
      slug: body.slug,
      price: body.price,
      region: body.region,
      description: body.description,
      featured: body.featured,
      status: body.status,
    };

    if (body.detailInfo) {
      updateData.detailInfo = body.detailInfo;
    }

    if (body.content) {
      updateData.content = body.content;
    }

    if (body.reasons && body.reasons.length > 0) {
      updateData.reasons = body.reasons;
    }

    if (body.tips) {
      updateData.tips = body.tips;
    }

    if (body.gallery && body.gallery.length > 0) {
      updateData.gallery = body.gallery;
    }

    if (body.featuredImage) {
      updateData.featuredImage = body.featuredImage;
    } else if (body.imageUrl) {
      updateData.imageUrl = body.imageUrl;
    }

    const destination = await payload.update({
      collection: 'destinations',
      id,
      data: updateData,
    });

    return NextResponse.json({
      success: true,
      destination,
    });
  } catch (error) {
    console.error('Update destination error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update destination'
    }, { status: 500 });
  }
}

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
      collection: 'destinations',
      id,
    });

    return NextResponse.json({
      success: true,
      message: 'Destination deleted successfully',
    });
  } catch (error) {
    console.error('Delete destination error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete destination'
    }, { status: 500 });
  }
} 