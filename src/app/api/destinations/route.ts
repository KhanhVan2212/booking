import { NextRequest, NextResponse } from 'next/server';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '../../../../payload.config';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    const url = new URL(request.url);
    const featured = url.searchParams.get('featured');
    const limit = url.searchParams.get('limit');

    const where: any = {
      status: {
        equals: 'published',
      },
    };

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