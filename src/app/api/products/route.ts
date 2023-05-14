import { createClient } from "contentful";
import { NextResponse } from "next/server";
const space: string = process.env.CONTENTFUL_SPACE_ID!;
const accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN!;
const contentfulClient = createClient({
    space,
    accessToken,
});

const filterData = (data: any[]) =>
    data.map((entry: any) => {
        const {
            fields: {
                primaryImage: {
                    fields: {
                        file: { url },
                    },
                },
                title,
                price,
                slug,
            },
        } = entry;
        return { imgUrl: "https:" + url, title, price, slug };
    });
async function getProducts() {
    const data = await contentfulClient.getEntries({
        content_type: "title",
    });
    return filterData(data.items);
}

export async function GET() {
    const data = await getProducts();
    if (data) {
        return NextResponse.json({ status: 'success', data });
    }
    return NextResponse.json({ status: 'failed', message: 'failed to fetch products' });
}