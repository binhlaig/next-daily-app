
import Outcome from "@/models/Outcome"; 
import { connectToDB } from "@/mongodb/database";

export async function GET(req) {
    try {
        await connectToDB();
        const user = await Outcome.find();
        return new Response(JSON.stringify(user), { status: 200 });

    } catch (err) {
        return new Response("Internal server Error!", { status: 500 });
    }
}

