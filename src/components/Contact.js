import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section className="bg-primary">
      <div className="mx-4 pt-4 md:mx-12 lg:mx-24 lg:pt-8">
        <h1 className="text-4xl">Ready to take Rig for a spin?</h1>

        <div className="grid grid-cols-12 mt-8 rounded-lg border border-light bg-white">
          <div className="col-span-full lg:col-span-6 p-8 border-r border-r-light">
            <p className="text-black text-xl">Schedule a call</p>
            <p className="text-text-secondary pt-3">
              We are gladly helping companies to get started.
            </p>
            <button className="mt-6 py-1 px-4 text-sm bg-black text-white rounded-lg cursor-pointer">
              Schedule a Call
            </button>
          </div>
          <div className="col-span-full lg:col-span-6 p-8 ">
            <p className="text-black text-xl">Try it out yourself</p>
            <p className="text-text-secondary pt-3">
              We have made it as easy as possible to try Rig.
            </p>
            <button className="my-6 flex gap-1 items-center py-1 px-4 text-sm bg-black rounded-lg cursor-pointer">
              <p className="text-white">Explore documentation</p>
              <FaArrowRightLong color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
