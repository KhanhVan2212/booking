import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { LandingPageCMSData } from "@/types/landing-page.types";

const DATA_FILE_PATH = path.join(
  process.cwd(),
  "src/data/landing-page.payload.json"
);

// GET - Lấy dữ liệu
export async function GET() {
  try {
    const fileContents = await fs.readFile(DATA_FILE_PATH, "utf8");
    const data = JSON.parse(fileContents);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read data" },
      { status: 500 }
    );
  }
}

// PUT - Lưu dữ liệu
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const data: LandingPageCMSData = body.data;

    // Validate data structure
    if (!data || !data.hero || !data.services) {
      return NextResponse.json(
        { success: false, error: "Invalid data structure" },
        { status: 400 }
      );
    }

    // Write to file
    await fs.writeFile(
      DATA_FILE_PATH,
      JSON.stringify(data, null, 2),
      "utf8"
    );

    return NextResponse.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    console.error("Error saving file:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}
