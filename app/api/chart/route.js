import Total from "@/models/Total";
import { connectToDB } from "@/mongodb/database";

export async function GET(req) {
    try {

        await connectToDB();
        const total = await Total.find();
        return new Response(JSON.stringify(total), {status: 200});

    } catch (err) {
        return new Response("Internal server error!", { status: 200 });

    }
}
