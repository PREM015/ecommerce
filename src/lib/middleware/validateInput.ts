// validateInput.ts
// src/lib/middleware/validateInput.ts
import { NextRequest, NextResponse } from "next/server";
import { ZodSchema } from "zod";

/**
 * Validates request body against a Zod schema
 * @param schema Zod schema to validate input
 * @param handler Function to run if validation passes
 */
export function validateInput<T>(
  schema: ZodSchema<T>,
  handler: (req: NextRequest, data: T) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    try {
      const body = await req.json();
      const parsedData = schema.parse(body);
      return handler(req, parsedData);
    } catch (err: any) {
      if (err.name === "ZodError") {
        return NextResponse.json(
          { errors: err.errors },
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }
  };
}
