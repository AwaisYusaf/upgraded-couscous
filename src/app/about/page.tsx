import React from "react";
import Image from "next/image";
type Props = {};
const text = "";

function About({}: Props) {
  return (
    <main className="flex mb-12 md:mb-6">
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
        <h1 className="my-8 text-4xl">About karakanani</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 pt-8 border-t border-gray-200">
          <Image
            src="/assets/about1.avif"
            alt=""
            width={500}
            height={1000}
            className="mr-6 mb-6"
          />
          <p className="col-span-1 lg:col-span-2 tracking-wider leading-7">
            Hi! My name is Kara and I am the owner and artist behind this little
            stationery and handmade shop based in Southern California! The name
            karakanani was inspired from an old nickname a family friend would
            call me by —my first name being Kara and my middle name being
            Kanani. The name just stuck! My final semester of college was during
            the pandemic, so I started a small business in this time as a
            creative outlet and to simply challenge myself! Now, I run this shop
            full-time at home and hope to expand my product line in the future!
            I am also currently Creative Director for GenGen (Generous
            Generation)
          </p>
        </div>
        <p className="tracking-wider leading-7">
          where I bring artists to use their creative skills to support
          nonprofits and communities in need. This shop has been a part of an
          ongoing dream to share my art with others and tangibly channel my
          passion for packaging design and illustration. One of my main goals in
          sharing art is to spark nostalgia and encourage connection between
          people. I am grateful for the opportunities to meet and connect with
          others who love art just as much! As a committed tea-drinker, cute
          stationery collector, and traveler, I am always looking for new ways
          to bring these hobbies and interests to paper. Doodling and drawing
          has been a neat way to express myself —thankful for my mum and pops
          who encourage all things creative and share creative passions like me!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
          <p className="col-span-1 lg:col-span-2 tracking-wider leading-7">
            It is such a gift to share my favorite things, memories, and
            inspirations through art. Thank you for being a part of this dream
            to design for my own stationery shop. This shop also helps me in
            many ways like paying off college and other financial needs I may
            have in this season.Your support on Instagram and in this shop
            affirms this creative journey and helps in such great ways. Cheers
            to many more creative adventures ahead! Come say hi to me on
            Instagram @karakanani! There, you can find my latest creations and
            doodles.
          </p>
          <Image
            src="/assets/about1.avif"
            alt=""
            width={500}
            height={1000}
            className="mt-6"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
