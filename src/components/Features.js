import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Features = () => {
  return (
    <section className="bg-primary">
      <div className="bg-secondary mx-4 rounded-2xl text-white pb-32">
        <div className="mx-4 pt-12 md:mx-12 lg:mx-24 lg:pt-24">
          <div className="space-y-4">
            <button className="flex gap-1 px-2 py-1 items-center border border-dark-light-3 bg-dark-light rounded-full text-sm">
              <img src="/images/icon-white.svg" width={10} alt="icon" />
              Convention over Configuration
            </button>
            <h1 className="text-xl lg:text-4xl text-white">
              Developer-Friendly Kubernetes Abstractions
            </h1>
            <p className="text-white w-full md:w-3/5 lg:w-2/4 text-text-secondary">
              Deploy and scale applications without battling the intricacies of
              K8s and spending valuable time configuring low-level K8s resources
              repeatedly.
            </p>
            <button className="flex gap-1 items-center py-1 px-4 text-sm bg-white rounded-xl cursor-pointer">
              <p className="">Explore documentation</p>
              <FaArrowRightLong color="black" />
            </button>
          </div>

          <div className="pt-5 grid grid-cols-12 gap-5 mt-8">
            <div className=" col-span-full lg:col-span-7">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 flex flex-col items-center justify-center space-y-4">
                <div className="h-34 lg:h-44">
                  <img src="/images/feat-1.svg" alt="feature" />
                </div>
                <p className="text-white pt-8">Autoscaler</p>
                <p className="text-dark-light-1 text-center mx-4 lg:mx-14">
                  Seamlessly enable vertical- and horizontal autoscaling with
                  CPU- & Memory limits, number of replicas & avg. CPU
                  utilisation Targets.
                </p>
              </div>
            </div>

            <div className="col-span-full lg:col-span-5">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 flex flex-col items-center justify-center space-y-4">
                <div className="h-34 lg:h-44">
                  <img src="/images/feat-2.svg" alt="feature" />
                </div>
                <p className="text-white pt-8">Network Interfaces</p>
                <p className="text-dark-light-1 text-center mx-4 lg:mx-8">
                  Manage Private and Public Network Interfaces and let Rig
                  automatically handle the rest.
                </p>
              </div>
            </div>

            <div className="col-span-full lg:col-span-5">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 flex flex-col items-center justify-center space-y-4">
                <div className="h-34 lg:h-44">
                  <img src="/images/feat-3.svg" alt="feature" />
                </div>
                <p className="text-white pt-8">Environment Variables</p>
                <p className="text-dark-light-1 text-center mx-4 lg:mx-8">
                  Automate configuring the low-level Kubernetes resources on
                  both container and pod-level.
                </p>
              </div>
            </div>

            <div className="col-span-full lg:col-span-7">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 flex flex-col items-center justify-center space-y-4">
                <div className="h-34 lg:h-44">
                  <img src="/images/feat-4.svg" alt="feature" />
                </div>
                <p className="text-white pt-8">Config Files</p>
                <p className="text-dark-light-1 text-center mx-4 lg:mx-8">
                  Our platform simplifies config files and their mounting. Don’t
                  spend time changing low-level K8s resources.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-24">
            <button className="flex gap-1 px-2 py-1 items-center border border-dark-light-3 bg-dark-light rounded-full text-sm">
              <img src="/images/icon-white.svg" width={10} alt="icon" />{" "}
              Deployment
            </button>
            <h1 className="text-xl lg:text-4xl text-white">
              Flexible and scalable Deployment Engine
            </h1>
            <p className="text-white w-full md:w-3/5 lg:w-2/4 text-text-secondary">
              Deploy and manage any application on any cloud provider with Rig
              and Kubernetes. Rig enables developers to deploy well-configured
              applications in Kubernetes without the complexity.
            </p>
            <button className="flex gap-1 items-center py-1 px-4 text-sm bg-white rounded-xl cursor-pointer">
              <p className="">Explore documentation</p>
              <FaArrowRightLong color="black" />
            </button>
          </div>

          <div className="grid grid-cols-12 mt-12 gap-5">
            <div className="col-span-full lg:col-span-4">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 space-y-2">
                <p className="text-white">Builds</p>
                <p className="text-dark-light-1">
                  Immutable deployments of a new services w. automatic
                  configurations of resources.
                </p>
                <div className="h-50 lg:h-44 pt-8">
                  <img src="/images/feat-5.svg" alt="feature" />
                </div>
              </div>
            </div>

            <div className="col-span-full lg:col-span-4">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 space-y-2">
                <p className="text-white">Rollouts & Rollbacks</p>
                <p className="text-dark-light-1">
                  Deploy and update configurations with immutability and
                  efficient Rollbacks.
                </p>
                <div className="h-50 lg:h-44 pt-8">
                  <img src="/images/feat-6.svg" alt="feature" />
                </div>
              </div>
            </div>

            <div className="col-span-full lg:col-span-4">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 space-y-2">
                <p className="text-white">Integrations</p>
                <p className="text-dark-light-1">
                  Integrate seamlessly into existing cloud- native deployment
                  stacks.
                </p>
                <div className="h-50 lg:h-44 pt-8 ">
                  <img src="/images/feat-7.svg" alt="feature" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-24">
            <button className="flex gap-1 px-2 py-1 items-center border border-dark-light-3 bg-dark-light rounded-full text-sm">
              <img src="/images/icon-white.svg" width={10} alt="icon" />
              Troubleshoot & Debug
            </button>
            <h1 className="text-xl lg:text-4xl text-white">Troubleshooting made simple</h1>
            <p className="text-white w-full md:w-3/5 lg:w-2/4 text-text-secondary">
              Deploy and manage any application on any cloud provider with Rig
              and Kubernetes. Rig enables developers to deploy well-configured
              applications in Kubernetes without.
            </p>
            <button className="flex gap-1 items-center py-1 px-4 text-sm bg-white rounded-xl cursor-pointer">
              <p className="">Explore documentation</p>
              <FaArrowRightLong color="black" />
            </button>
          </div>

          <div className="grid grid-cols-12 mt-12 gap-5">
            <div className="col-span-full md:colspan-6 lg:col-span-3">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 space-y-2">
                <div>
                  <img src="/images/feat-8.svg" alt="feature" />
                </div>
                <p className="text-white pt-4">Cluster insights</p>
                <p className="text-dark-light-1 pt-4 pb-6">
                  High-level access to cluster health, features and issues.
                </p>
              </div>
            </div>

            <div className="col-span-full md:colspan-6 lg:col-span-3">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 space-y-2">
                <div>
                  <img src="/images/feat-9.svg" alt="feature" />
                </div>
                <p className="text-white pt-4">Instances</p>
                <p className="text-dark-light-1 pt-4">
                  Instance status and dependencies in one aggregated view.
                </p>
              </div>
            </div>

            <div className="col-span-full md:colspan-6 lg:col-span-3">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 space-y-2">
                <div>
                  <img src="/images/feat-10.svg" alt="feature" />
                </div>
                <p className="text-white pt-4">Logging</p>
                <p className="text-dark-light-1 pt-4">
                  Stream combined Capsule logs across instances, directly from
                  the dashboard.
                </p>
              </div>
            </div>

            <div className="col-span-full md:colspan-6 lg:col-span-3">
              <div className="p-5 bg-dark-light rounded-lg border border-dark-light-3 space-y-2">
                <div>
                  <img src="/images/feat-11.svg" alt="feature" />
                </div>
                <p className="text-white pt-4">Health Checks</p>
                <p className="text-dark-light-1 pt-4 pb-6">
                  Easily configure Liveness and Ready probes for Capsules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
