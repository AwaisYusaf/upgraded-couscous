import React from "react";

type Props = {};

function ExclusiveAccess({}: Props) {
  return (
    <section className="flex flex-col items-center space-y-8 py-12">
      <h1 className="text-4xl text-center font-medium">Get exclusive access</h1>
      <p className="text-center w-[90%] mx-auto text-lg opacity-80 lg:w-[50%]">
        Join the karakanani Patreon community! As a patron, you can receive
        monthly happy mail, view behind the scenes content, and get early access
        to this shops updates.
      </p>
      <button className="text-white bg-custom-pink-2 mx-auto px-8 py-3 rounded-full my-6 hover:ring-2 ring-custom-pink-2 transition-all">
        Patreon Page
      </button>
    </section>
  );
}

export default ExclusiveAccess;
