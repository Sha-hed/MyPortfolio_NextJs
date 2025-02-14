import { ConnectDB } from "@/lib/ConnectDB";
import { NextResponse } from "next/server";

export const POST = async (request:any) => {
  try {
    const message = await request.json();
    const db = await ConnectDB();
    const messageCollection = await db.collection("messages");
    const result = await messageCollection.insertOne(message);

    return NextResponse.json({ message: "Message Sent Successfully" ,data:result });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", data:error });
  }
};

export const GET = async (request:any) => {
  try {
    // const project = await request.json();
    const db = await ConnectDB();
    const messageCollection = db.collection("messages");
    const result = await messageCollection.find().toArray();
    return NextResponse.json({
      message: "Messages Retrieved Successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went wrong man!",
      data: error,
    });
  }
};

