import { NextResponse } from "next/server";

export const revalidate = 86400;

export async function GET() {
  const res = await fetch(
    `${process.env.WP_BASE_URL}/wp-json/wp/v2/posts?_fields=id,title,content,date,acf,slug`
  );
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
