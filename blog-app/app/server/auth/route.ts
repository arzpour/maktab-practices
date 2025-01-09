import {
  getBloggersByCredentials,
  loginBlogger,
} from "@/server/services/bloggers.service";
import { authSchema } from "@/server/validations/auth.validation";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (req: Request) => {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      {
        error: "Invalid body",
      },
      {
        status: 400,
      }
    );
  }
  const validationResult = authSchema.safeParse(body);
  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: validationResult.error,
      },
      {
        status: 404,
      }
    );
  }

  const user = await getBloggersByCredentials(body.username, body.password);
  if (!user) {
    return NextResponse.json(
      {
        error: "Blogger not found",
      },
      {
        status: 404,
      }
    );
  }
  console.log(user);
  const token = crypto.randomUUID();
  if (!(await loginBlogger(user.id, token))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
  return Response.json({ token });
};
