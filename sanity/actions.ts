import { groq } from "next-sanity"; //Sanity query language
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetRecoucesParams {
    query: string;
    category: string;
    page: string;
}

export const getResources = async (params: GetRecoucesParams) => {
    const {query, category, page} = params;

    try {
        const resources = await readClient.fetch(
            groq`${buildQuery({
                type: 'resoource',
                query,
                category,
                page: parseInt(page),
            })}{
                title,
                _id,
                demoLink,
                "image": poster.asset->url,
                views,
                slug,
                category
            }`
        );

        return resources;
    } catch (error) {
        console.log(error);
        
    }
}