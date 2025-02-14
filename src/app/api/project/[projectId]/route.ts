import { ConnectDB } from "@/lib/ConnectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request : any, { params }: any) => {
  try {
    const projectId = await params.projectId;
    //console.log("Project Id Paiso ?", projectId);
    // const project = await request.json();
    const filter = { _id: new ObjectId(projectId) };
    const db = await ConnectDB();
    const projectCollection = db.collection("projects");
    const result = await projectCollection.findOne(filter);
    return NextResponse.json({
      message: "Project Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went wrong!",
      data: error,
    });
  }


};
export const DELETE= async (request : any, { params } : any) => {
  try {
    const projectId = await params.projectId;
    //console.log("Project Id Paiso ?", projectId);
    // const project = await request.json();
    const filter = { _id: new ObjectId(projectId) };
    const db = await ConnectDB();
    const projectCollection = db.collection("projects");
    const result = await projectCollection.deleteOne(filter);
    return NextResponse.json({
      message: "Project Deleted Successfully",
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
    const project = await request.json();
    const projectId = await params.projectId;
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        ...project
      },
    };
    const filter = { _id: new ObjectId(projectId) };
    const db = await ConnectDB();
    const blogCollection = db.collection("projects");
    const result = await blogCollection.updateOne(filter, updateDoc, options);
    return NextResponse.json({
      message: "Project Updated Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went wrong!",
      data: error,
    });
  }
};