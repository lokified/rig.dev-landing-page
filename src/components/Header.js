import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiLogoGithub } from "react-icons/bi";

export const Header = () => {
  return (
    <div className="container mx-auto px-4 md:px-12">
      <div className="grid md:grid-cols-12 my-24 lg:min-h-screen">
        <div className="col-span-full lg:col-span-5">
          <h1 className="text-4xl lg:text-start text-center">The application platform for Kubernetes</h1>

          <p className="text-text-secondary my-5 text-center lg:text-start">
            Deploy, manage and troubleshoot cloud-native applications at scale
            without overwhelming your engineers with the complexity of
            Kubernetes.
          </p>

          <div className="flex gap-2 flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-center lg:justify-start">
            <a href="#docs" className="flex gap-1 items-center py-2 px-4 bg-secondary rounded-lg">
              <p className="text-white">Documentation</p>
              <FaArrowRightLong color="white"/>
            </a>

            <a href="#docs" className="py-2 px-4 flex gap-1 items-center border border-light rounded-lg">
                <BiLogoGithub />
              <p className="">Get Started</p>
            </a>
          </div>

          <div className="mt-32">
            <p className="text-text-secondary text-sm">Compatible with</p>
            <div className="pt-2">
              <img src="/images/compatible.svg" alt="google cloud" />
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-7 -mt-12 hidden lg:block">
            <img src="/images/hero-img.svg" alt="hero img" />
        </div>
      </div>
    </div>
  );
};
