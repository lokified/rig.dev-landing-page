import React from "react";

export const Usage = () => {
  return (
    <section className="bg-primary lg:min-h-screen">
      <div className="container mx-auto mt-4 lg:mt-24 p-12">
        <div className="flex justify-center items-center flex-col space-y-4">
          <div className="bg-white rounded-xl mt-4 lg:mt-24 px-2 text-text-secondary text-sm border border-light">
            Fixing K8 complexity
          </div>
          <p className="text-xl md:text-3xl text-center">
            Don’t let the complexity of Kubernetes <br /> leak into your
            engineering team
          </p>
        </div>

        <div className="grid grid-cols-12 gap-1 lg:gap-3 lg:py-5">
          <div className="border border-light-1 rounded-2xl m-5 shadow-sm col-span-full md:col-span-6 lg:col-span-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <img src="/images/usage-1.png" alt="usage-1" className="w-full h-42 object-cover"/>

              <p className="mt-8">Abstract Away K8s Primitives</p>
              <p className="mt-4 text-text-secondary">
                Deploy, manage and debug applications with end-to-end ownership
                without experiencing bottlenecks or battling Kubernetes hurdles.
              </p>
            </div>
            <div className="h-8"></div>
          </div>

          <div className="border border-light-1 rounded-2xl m-5 shadow-sm col-span-full md:col-span-6 lg:col-span-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <img src="/images/usage-2.png" alt="usage-2" className="w-full h-42" />

              <p className="mt-8">Proactively Troubleshoot</p>
              <p className="mt-4 text-text-secondary">
                Identify availability issues, misconfigurations, lack of
                resources, K8s anomalies and failed deploys w. feedback and
                health checks.
              </p>
            </div>
            <div className="h-8"></div>
          </div>

          <div className="border border-light-1 rounded-2xl m-5 shadow-sm col-span-full md:col-span-6 lg:col-span-4">
            <div className="p-4 bg-white rounded-2xl shadow-sm">
              <img src="/images/usage-3.png" className="w-full h-42" alt="usage-3"/>

              <p className="mt-8">Developer Tools</p>
              <p className="mt-4 text-text-secondary">
                Robust tooling that encompass a CLI, an extensive
                developer-interfaces and cloud- native CI/CD integrations.
              </p>
            </div>
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
