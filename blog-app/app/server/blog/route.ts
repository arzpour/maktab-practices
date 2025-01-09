import { authorization } from "@/server/services/bloggers.service";
import { blogsList, creatBlog } from "@/server/services/blogs.service";
import {
  createBlogSchema,
  thumbnailValidator,
} from "@/server/validations/blogs.validation";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page") || 1);
  const perPage = Number(searchParams.get("perPage") || 10);
  return Response.json({ data: await blogsList({ page, perPage }) });
};

export const POST = async (req: Request) => {
  const body = await req.formData();
  const token = req.headers.get("Authorization") || "";
  if (!(await authorization(token))) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
  const validationResult = createBlogSchema.safeParse({
    title: body.get("title")?.toString() || "",
    text: body.get("text")?.toString() || "",
    description: body.get("description")?.toString() || "",
    hide: body.get("hide")?.toString(),
  });

  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: validationResult.error,
      },
      {
        status: 400,
      }
    );
  }

  const thumbnailInvalidMsg = thumbnailValidator(<File>body.get("thumbnail"));

  if (!!thumbnailInvalidMsg) {
    return NextResponse.json(
      {
        error: thumbnailInvalidMsg,
      },
      {
        status: 400,
      }
    );
  }

  if (!(await creatBlog(body))) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
  return Response.json({ message: "ok" });
};
