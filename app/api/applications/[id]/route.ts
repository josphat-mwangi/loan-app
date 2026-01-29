import { NextResponse } from "next/server";
import { mockApplications } from "@/lib/mockData";

/**
 * GET /api/applications/[id]
 * Fetches loan application by phone number
 */
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id: phoneNumber } = await params;

    // Simulate network delay for realistic loading state
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Clean phone number (remove spaces and +)
    const cleanedPhone = phoneNumber.replace(/[\s+]/g, "");

    // Find application by phone number
    const application = mockApplications.find(
      (app) =>
        app.phoneNumber === cleanedPhone ||
        app.phoneNumber === `0${cleanedPhone.slice(3)}` || // Handle 254... or +254... format
        `254${app.phoneNumber.slice(1)}` === cleanedPhone,
    );

    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(application);
  } catch (error) {
    console.error("Error fetching application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
