import { NextResponse } from "next/server";

const { MongoClient } = require("mongodb");

export async function GET(request) {

    const uri = "mongodb+srv://akshat21:akshat21@cluster0.tyxgujx.mongodb.net/";
    
    const client = new MongoClient(uri);
    
        try {
            const database = client.db('stock');
            const inventory = database.collection('inventory');
            
            const query = { };
            const products = await inventory.find(query).toArray();
            
            return NextResponse.json({success: true ,products})
        } finally {
            await client.close();
        }
}

export async function POST(request) {

    let body = await request.json();
    const uri = "mongodb+srv://akshat21:akshat21@cluster0.tyxgujx.mongodb.net/";
    
    const client = new MongoClient(uri);
    
        try {
            const database = client.db('stock');
            const inventory = database.collection('inventory');
            
            const product = await inventory.insertOne(body);
            
            return NextResponse.json({product, ok: true})
        } finally {
            await client.close();
        }
}