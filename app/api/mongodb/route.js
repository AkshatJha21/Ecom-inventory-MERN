import { NextResponse } from "next/server";

const { MongoClient } = require("mongodb");

export async function GET(request) {

    
    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://akshat21:akshat21@cluster0.tyxgujx.mongodb.net/";
    
    const client = new MongoClient(uri);
    
        try {
            const database = client.db('ims');
            const stocks = database.collection('stock');
            
            // Query for a movie that has the title 'Back to the Future'
            const query = { };
            const inventory = await stocks.findOne(query);
            
            console.log(inventory);
            return NextResponse.json({"a": 34})
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
}