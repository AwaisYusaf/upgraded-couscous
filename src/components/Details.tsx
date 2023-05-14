"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
type Props = any;
const images = [
  "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  "https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const videos = ["video.mp4"];

const filterData = (data: any) => {
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
      images,
    },
  } = data;
  const secondaryImages = images.map((image: any) => {
    const {
      fields: {
        file: { url },
      },
    } = image;
    return "https:" + url;
  });
  return { imgUrl: "https:" + url, title, price, slug, secondaryImages };
};

function ProductDetails({ data }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(0);
  const filteredData = filterData(data);
  const [toggle, setToggle] = useState(false);

  function handleAddToCart() {
    try {
      const { imgUrl, title, price, slug } = filteredData;
      const res = localStorage.getItem("cart");
      if (res) {
        let cart = JSON.parse(res);
        //Check whether item is not in cart..
        const item = cart.items.find(
          (item: any) => item.slug == filteredData.slug
        );
        if (!item) {
          //Add new item if not exists..
          const updatedCart = {
            items: [...cart.items, { imgUrl, title, price, slug, quantity: 1 }],
          };
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
        }
      } else {
        const cart = { items: [{ imgUrl, title, price, slug, quantity: 1 }] };
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    } catch (err) {}
  }

  return (
    <section className="flex flex-col lg:flex-row lg:space-x-8 lg:px-12 my-12">
      <FsLightbox toggler={toggle} sources={selected} />

      <div className="basis-2/3 flex flex-row-reverse lg:flex-row lg:px-2 space-x-4">
        <div className="w-full">
          <img
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover cursor-pointer"
            src={filteredData.imgUrl}
            onClick={() => {
              setSelected([filteredData.imgUrl]);
              setToggle(!toggle);
            }}
          />
          <div className="hidden md:grid grid-cols-2 gap-3 mt-3 ">
            {filteredData.secondaryImages.map(
              (image: string, index: number) => {
                return (
                  <img
                    className={`w-full h-[400px] object-cover cursor-pointer `}
                    onClick={() => {
                      setSelected([image]);
                      setToggle(!toggle);
                    }}
                    src={image}
                    key={index}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>

      <div className="basis-1/3 flex flex-col space-y-4 mt-6 lg:mt-0 px-4 lg:px-0 sticky">
        <h3 className="text-4xl tracking-wider">{filteredData.title}</h3>
        <p className="text-xl tracking-[2px]">${filteredData.price}</p>
        <hr className="bg-gray-300" />
        <p className=" w-full">Quantity</p>

        <div className="custom-number-input h-12 w-32">
          <div className="flex flex-row h-12 w-full rounded relative bg-transparent mt-1 shadow ring-[1px] ring-gray-200">
            <button
              data-action="decrement"
              className="  h-full w-20 rounded-l cursor-pointer outline-none"
              onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={quantity}
              onChange={(e) =>
                setQuantity(+e.target.value < 0 ? quantity : +e.target.value)
              }
            ></input>
            <button
              data-action="increment"
              className=" h-full w-20 rounded-r cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div />
        <button
          onClick={handleAddToCart}
          className="rounded-full group text-center ring-gray-400 hover:ring-black hover:ring-2 transition-all ring-1 py-3 flex items-center"
        >
          <p className="flex-grow transition duration-200">Add to Cart</p>
        </button>
        <button className="w-full text-center text-white bg-black py-3 text-lg font-bold hidden">
          Buy it now
        </button>
        <p className="italic tracking-[1px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          necessitatibus.
        </p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          aperiam expedita similique et itaque asperiores sequi quae id hic
          doloribus!
        </p>
        <ul className="list-disc ml-8">
          <li>Olive</li>
          <li>Olive</li>
          <li>Olive</li>
          <li>Olive</li>
          <li>Olive</li>
        </ul>
      </div>
    </section>
  );
}

export default ProductDetails;
