import { ConnectDB } from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request :any, { params }: any) => {
  try {
    
    const blogId = await params.blogId;
    // const project = await request.json();
    const filter = { _id: new ObjectId(blogId) };
    const db = await ConnectDB();
    const blogCollection = db.collection("blogs");
    const result = await blogCollection.findOne(filter);
    return NextResponse.json({
      message: "Blog Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went wrong!",
      data: error,
    });
  }
};

export const PATCH = async (request : any, { params } : any) => {
  try {
    const blog = await request.json();
    const blogId = await params.blogId;
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        ...blog
      },
    };
    //console.log("Project Id Paiso ?", projectId);
    // const project = await request.json();
    const filter = { _id: new ObjectId(blogId) };
    const db = await ConnectDB();
    const blogCollection = db.collection("blogs");
    const result = await blogCollection.updateOne(filter, updateDoc, options);
    return NextResponse.json({
      message: "Blog Updated Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went wrong!",
      data: error,
    });
  }
};

export const DELETE = async (request : any, { params } : any) => {
  try {
    const blogId = await params.blogId;
    //console.log("Project Id Paiso ?", projectId);
    // const project = await request.json();
    const filter = { _id: new ObjectId(blogId) };
    const db = await ConnectDB();
    const blogCollection = db.collection("blogs");
    const result = await blogCollection.deleteOne(filter);
    return NextResponse.json({
      message: "Blog Deleted Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went wrong!",
      data: error,
    });
  }
};
