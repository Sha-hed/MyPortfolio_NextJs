import { ConnectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";


export const POST = async (request:any) => {
  try {
    const project = await request.json();
    const db = await ConnectDB();
    const projectCollection = db.collection("projects");
    const result = await projectCollection.insertOne(project);
    return NextResponse.json({
      message: "Project Added Successfully!!",
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
    const projectCollection = db.collection("projects");
    const result = await projectCollection.find().toArray();
    return NextResponse.json({
      message: "Projects Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something Went wrong man!", error });
  }
};
