"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import YouMayLikeCard from "./YouMayLikeCard";
import LoadingSkelton from "./LoadingSkelton";
const fetcher = (url: any) => fetch(url).then((r) => r.json());
function YouMayLikeSection() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);
  if (isLoading) {
    return (
      <div className="grid grid-cols-4 mt-8 mb-12 gap-x-4">
        <LoadingSkelton />
        <LoadingSkelton />
        <LoadingSkelton />
        <LoadingSkelton />
      </div>
    );
  }
  const res = data.data;
  const products = [];
  for (let i = 0; i < (res.length > 4 ? 4 : res.length); i++) {
    products.push(<YouMayLikeCard key={i} data={res[i]} />);
  }

  return (
    <div className="my-8">
      <h2 className="my-4 text-3xl">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products}
      </div>
    </div>
  );
}
export default YouMayLikeSection;
