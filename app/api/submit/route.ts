import { NextRequest, NextResponse } from "next/server";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from "uuid";

const client = new DynamoDBClient({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    }
})

export async function POST(req: NextRequest){
    try{
        const body = await req.json();
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return NextResponse.json({ message: "All fields are required!"}, { status: 400 })
        }
        const command = new PutCommand({
            TableName: "sampleTable",
            Item: {
                id: uuidv4(),
                name: name,
                email: email,
                message: message,
                submittedAt: new Date().toISOString()
            }
        })
        const result = await client.send(command);
        return NextResponse.json({ message: "Message submitted successfully!"}, { status: 200 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Something went wrong!"}, { status: 500 })
    }
}