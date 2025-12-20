import { NextRequest, NextResponse } from "next/server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "../../../../payload.config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function handler(req: NextRequest) {
  try {
    const payload = await getPayloadHMR({ config: configPromise });
    
    // Tạo URL mới để proxy request đến Payload
    const url = new URL(req.url);
    const pathname = url.pathname.replace("/api/payload", "");
    
    // Tạo request mới với pathname đã sửa
    const newRequest = new Request(
      new URL(pathname + url.search, url.origin),
      {
        method: req.method,
        headers: req.headers,
        body: req.body ? await req.text() : undefined,
      }
    );
    
    // Payload sẽ xử lý request thông qua internal API
    const response = await fetch(newRequest);
    
    return new NextResponse(response.body, {
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    console.error("Payload API Error:", error);
    return NextResponse.json(
      { error: "Payload API error", message: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;

