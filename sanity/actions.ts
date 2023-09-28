import { groq } from "next-sanity"; //Sanity query language
import { readClient } from "./lib/client";

interface GetRecoucesParams {
    query: string;
    category: string;
    page: string;
}

export const getResources = async (params: GetRecoucesParams) => {
    const {query, category, page} = params;

    try {
        const resouces = await readClient.fetch(
            groq``
        )
    } catch (error) {
        
    }
}