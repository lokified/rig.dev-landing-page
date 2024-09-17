import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="mt-32 pt-12 bg-secondary rounded-tl-3xl rounded-tr-3xl">
      <div className="mx-4 pt-4 md:mx-12 lg:mx-24 lg:pt-16">
        <div className="bg-dark-light rounded-xl border border-dark-light-3">
          <div className="grid grid-cols-12">
            <div className="p-8 col-span-full lg:col-span-6">
              <h1 className="text-white text-xl text-center md:text-start md:text-3xl">Join our Community</h1>
              <div className="flex flex-col md:flex-row gap-1 items-center" >
                <button className="my-6 flex gap-1 items-center py-1 px-4 text-sm bg-white rounded-lg cursor-pointer">
                  <img src="/images/slack.svg" width={10} alt="slack" />
                  <p className="text-black">Join our Slack</p>
                </button>

                <button className="my-1 md:my-6 flex gap-1 items-center py-1 px-4 text-sm bg-dark-light rounded-lg cursor-pointer border border-dark-light-3">
                  <BiLogoGithub color="white" />
                  <p className="text-white">Star us on Github</p>
                </button>
              </div>
            </div>
            <div className="col-span-full lg:col-span-6 pr-5 hidden lg:block">
              <img
                src="/images/slack-pic.svg"
                className="h-full"
                alt="slack-pic"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center pt-12">
          <div className="col-span-full md:col-span-6 space-y-2">
            <div className="flex items-center gap-1">
              <img src="/images/icon-white.svg" alt="logo" />
              <p className="font-bold text-white">Rig.dev</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="border border-dark-light-3 bg-dark-light rounded-md p-1">
                <BiLogoGithub color="white" />
              </span>
              <span className="border border-dark-light-3 bg-dark-light rounded-md p-1">
                <FaXTwitter color="white" />
              </span>
              <span className="border border-dark-light-3 bg-dark-light rounded-md p-1">
                <FaLinkedin color="white" />
              </span>
              <span className="border border-dark-light-3 bg-dark-light rounded-md p-1">
                <FaSlack color="white" />
              </span>
            </div>
          </div>

          <div className="col-span-full md:col-span-6 pt-8">
            <div className="border border-dark-light-3 bg-dark-light rounded-xl p-5 space-y-3">
              <p className="text-dark-light-1 text-sm">
                Sign up for our newsletter and join the growing Rig.dev
                community.
              </p>
              <div className="grid grid-cols-12 gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="col-span-full lg:col-span-5 text-white px-2 py-1 outline-none border border-dark-light-3 bg-secondary rounded-md placeholder:text-sm placeholder:text-dark-light-3"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="col-span-full lg:col-span-5 text-white px-2 py-1 outline-none border border-dark-light-3 bg-secondary rounded-md placeholder:text-sm placeholder:text-dark-light-3"
                />
                <button className="col-span-full lg:col-span-2 sm:w-full mt-3 lg:mt-0 py-1 px-2 text-sm bg-white text-black rounded-lg cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-dark-light-3 mt-12" />
        <div className="flex flex-col-reverse items-center py-8 md:flex-row gap-2 md:gap-4">
            <p className="text-dark-light-1 text-sm">&copy; 2023 Rig.Dev ApS</p>
            <p className="text-dark-light-1 text-sm">Terms of Service</p>
            <p className="text-dark-light-1 text-sm">
              Privacy & Cookies policy
            </p>
          </div>
      </div>
    </section>
  );
};
