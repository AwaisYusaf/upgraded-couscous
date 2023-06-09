import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const secret = process.env.STRIPE_ACCESS_TOKEN;

export async function POST(req: NextRequest) {
    const data = await req.json();
    const items = data.items.map((item: any) => {
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.title,
                    images: [item.imgUrl]
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }
    })
    console.log(items);
    //@ts-ignore
    const stripe = new Stripe(secret);
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: items,
            currency: "usd",
            mode: 'payment',
            success_url: `${process.env.APP_BASE_URL}/checkout?status=success`,
            cancel_url: `${process.env.APP_BASE_URL}/checkout?status=failed`,
            billing_address_collection: "required",
        });
        return NextResponse.json({ url: session.url });

    } catch (err) {
        return NextResponse.json(err);
    }

}


// [
//     {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price_data: {
//             currency: "usd",
//             product_data: {
//                 name: 'T-shirt',
//                 description: "Product description",
//                 images: ["https://images.pexels.com/photos/16760200/pexels-photo-16760200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
//             },
//             unit_amount: 2000,
//         },
//         quantity: 4
//     },
//     {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price_data: {
//             currency: "usd",
//             product_data: {
//                 name: 'T-shirt2',
//                 description: "Product description",
//                 images: ["https://images.pexels.com/photos/12641771/pexels-photo-12641771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
//             },
//             unit_amount: 2000,
//         },

//         quantity: 2,
//         adjustable_quantity: {
//             enabled: true,
//             maximum: 10,
//             minimum: 1
//         }
//     },
// ]