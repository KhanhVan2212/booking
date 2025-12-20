import { NextRequest, NextResponse } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../../../../../payload.config';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

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
  } catch (error) {
    console.error('Get destination error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch destination'
    }, { status: 500 });
  }
}