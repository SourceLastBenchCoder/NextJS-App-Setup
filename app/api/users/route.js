import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        //const prompts = await User.find({})

        //return new Response(JSON.stringify(prompts), { status: 200 })

        return new Response("DB Connected");
    } catch (error) {
        return new Response("Failed to fetch all users", { status: 500 })
    }
} 