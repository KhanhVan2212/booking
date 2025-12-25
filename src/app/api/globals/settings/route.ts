import { NextRequest, NextResponse } from "next/server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../../../../payload.config";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    const settings = await payload.findGlobal({
      slug: "settings",
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json(
      { error: "Failed to fetch settings" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const config = await configPromise;
    const payload = await getPayloadHMR({ config });

    // Validate user is authenticated
    const { user } = await payload.auth({ headers: request.headers });
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const result = await payload.updateGlobal({
      slug: "settings",
      data: body,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating settings:", error);
    return NextResponse.json(
      { error: "Failed to update settings" },
      { status: 500 },
    );
  }
}
