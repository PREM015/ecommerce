import { NextRequest, NextResponse } from "next/server";
import { ZodSchema, ZodError } from "zod";

/**
 * Validates request body against a Zod schema
 * @param schema Zod schema to validate input
 * @param handler Function to run if validation passes
 */
export function validateInput<T>(
  schema: ZodSchema<T>,
  handler: (req: NextRequest, data: T) => Promise<NextResponse>
) {
  return async (req: NextRequest): Promise<NextResponse> => {
    try {
      const body = await req.json();
      const parsedData = schema.parse(body);
      return handler(req, parsedData);
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        return NextResponse.json({ errors: err }, { status: 400 });
      }
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  };
}
