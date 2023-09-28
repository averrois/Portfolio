import { groq } from "next-sanity"; //Sanity query language

interface GetRecoucesParams {
    query: string;
    category: string;
    page: string;
}

export const getResources = async (params: GetRecoucesParams) => {
    const {query, category, page} = params;

    try {
        
    } catch (error) {
        
    }
}