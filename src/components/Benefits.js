import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

export const Benefits = () => {
  return (
    <section className="bg-primary min-h-screen">
      <div className="mx-4 pt-12 md:mx-12 lg:mx-24 lg:pt-24">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-2xl lg:text-4xl text-center">A platform to benefit the entire team</h1>
          
          <div className="flex justify-around gap-4 bg-light-2 p-1 rounded-md text-sm text-center">
            <p className="bg-white px-2 py-1 rounded-md">Product Teams</p>
            <p className="px-2 py-1 text-dark-light-3">DevOps/Platform Teams</p>
            <p className="px-2 py-1 text-dark-light-3">Engineering Leaders</p>
          </div>

          <div className="grid grid-cols-12 gap-5 pt-8">
            <div className="col-span-full lg:col-span-4 rounded-lg border border-light p-5 bg-white space-y-4">
              <div className="w-9">
                <span className="bg-light-green rounded-md flex justify-center p-2">
                  <IoCheckmarkOutline />
                </span>
              </div>

              <p>Straight from code to production</p>
              <p className="text-text-secondary">
                Let developers independently deploy to K8 without any
                bottlenecks, steep K8 learning curves or unnecessary deployment
                stages.
              </p>
            </div>

            <div className="col-span-full lg:col-span-4 rounded-lg border border-light p-5 bg-white space-y-4">
              <div className="w-9">
                <span className="bg-light-green rounded-md flex justify-center p-2">
                  <IoCheckmarkOutline />
                </span>
              </div>

              <p>Troubleshoot blazingly fast</p>
              <p className="text-text-secondary">
                Identify issues, misconfigurations, lack of resources, and
                failed deploys, and resolve with rollbacks.
              </p>
            </div>

            <div className="col-span-full lg:col-span-4 rounded-lg border border-light p-5 bg-white space-y-4">
              <div className="w-9">
                <span className="bg-light-green rounded-md flex justify-center p-2">
                  <IoCheckmarkOutline />
                </span>
              </div>

              <p>Unmatched Developer Experience</p>
              <p className="text-text-secondary">
                Provide developers with a powerful platform that fits their
                workflows with a robust CLI and Dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
