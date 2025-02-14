//import { ConnectDB } from "@/lib/ConnectDB";
import { ConnectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const POST = async (request:any) => {
  try {
    const blog = await request.json();
    const db = await ConnectDB();
    const blogCollection = db.collection("blogs");
    const result = await blogCollection.insertOne(blog);
    return NextResponse.json({
      message: "Blogs Added Successfully!!",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went wrong man!", error });
  }
};

export const GET = async (request:any) => {
  try {
    // const project = await request.json();
    const db = await ConnectDB();
    const blogCollection = db.collection("blogs");
    const result = await blogCollection.find().toArray();
    return NextResponse.json({
      message: "Blogs Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went wrong man!",
      data: error,
    });
  }
};
