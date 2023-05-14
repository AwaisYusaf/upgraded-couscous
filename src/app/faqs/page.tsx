import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <section className="bg-white text-red-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight text-black opacity-70">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16">
          <p className=" font-semibold">
            COVID-19: Please allow for more time for delivery due to COVID-19
            postal restrictions and limited air services. Chupadoodles will also
            be sanitising the workspace before packing all orders. However, if
            Chupadoodles is unable to send mail to your country, you will be
            contacted and given a full refund which takes a few business days to
            process.
          </p>
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium ">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                How long does it take process orders?
              </h3>
              <p>
                Orders usually take 14 business days to process so please allow
                more time for a more accurate estimate.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium ">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                How long does shipping take?
              </h3>

              <ul className=" list-disc list-inside">
                <li>Domestic Delivery (Australia): 3-10 business days</li>
                <li>International Delivery: 3-8 weeks</li>
                <li>
                  Shipping time is the ordering processing time plus shipping
                  time.
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium ">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                How is shipping calculated?
              </h3>
              <ul className=" list-disc list-inside">
                <li>
                  All products are individually weighed and measured, and
                  shipping is automatically calculated based on the total weight
                  of the order and size of the item.
                </li>
                <li>
                  If your order contains non-flat items like washi tapes, it is
                  considered a parcel. This means your order will not be
                  eligible for letter service.
                </li>
                <li>
                  For international orders please be aware of any additional
                  import duties and/or taxes when they arrive. Please check the
                  import fees you may be liable for before you place your order.
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium ">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                What are your shipping prices?
              </h3>
              <p>Shipping prices shown in Australian Dollar.</p>
              <ul className="list-disc list-inside ">
                <li>Free Standard Shipping (Australia): Orders over $60 </li>
              </ul>
            </div>

            <div>
              <table className="w-full text-lg text-left mb-10">
                <thead className=" bg-custom-pink">
                  <tr>
                    <th className="p-4 border font-medium">Weight</th>
                    <th className="p-4 border font-medium">
                      Untracked Shipping ($)
                    </th>
                    <th className="p-4 border font-medium">
                      Tracked Shipping ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border">Under 0.125 kg</td>
                    <td className="p-4 border">3 (Letter Service)</td>
                    <td className="p-4 border">NA</td>
                  </tr>

                  <tr>
                    <td className="p-4 border">Under 0.25 kg</td>
                    <td className="p-4 border">3 (Letter Service)</td>
                    <td className="p-4 border">NA</td>
                  </tr>

                  <tr>
                    <td className="p-4 border">Under 0.5 kg</td>
                    <td className="p-4 border">NA</td>
                    <td className="p-4 border">NA</td>
                  </tr>

                  <tr>
                    <td className="p-4 border">Under 1 kg</td>
                    <td className="p-4 border">NA</td>
                    <td className="p-4 border">NA</td>
                  </tr>

                  <tr>
                    <td className="p-4 border">Under 5 kg</td>
                    <td className="p-4 border">NA</td>
                    <td className="p-4 border">NA</td>
                  </tr>
                </tbody>
              </table>

              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5  "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  International Shipping
                </h3>
                <p>
                  {" "}
                  International Shipping (Tracked) is now charged at a flat rate
                  of $15
                </p>
              </div>

              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium ">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5  "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Issues/Concerns
                </h3>
                <p>
                  All orders will be packed with lots of love, but if you have
                  any concerns about your order please contact the Chupadoodles
                  team at info@chupadoodles.com, Instagram DMs: @chupadoodles or
                  by this website.
                </p>
              </div>

              <div className="mb-10">
                <p>
                  Love,
                  <br />
                  <br />
                  Chupadoodles
                  <br />
                  <br />
                  HP: 0493044266
                  <br />
                  <br />
                  Email: info@chupadoodles.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
