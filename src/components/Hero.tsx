import React from "react";

const GridLine = () => {
  return (
    <svg
      className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          strokeWidth={0}
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
      />
    </svg>
  );
};

const Background = () => {
  return (
    <div
      className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      aria-hidden="true"
    >
      <div
        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style={{
          clipPath:
            "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
        }}
      />
    </div>
  );
};

type Items = {
  src: string;
  alt: string;
};

const items: { [key: string]: Items } = {
  typescript: {
    src: "/svg/typescript.svg",
    alt: "typescript icon",
  },
  javascript: {
    src: "/svg/javascript.svg",
    alt: "javascript icon",
  },
  react: {
    src: "/svg/react.svg",
    alt: "react icon",
  },
  tailwind: {
    src: "/svg/tailwind.svg",
    alt: "tailwind icon",
  },
  firebase: {
    src: "/svg/firebase.svg",
    alt: "firebase icon",
  },
};

const Hero: React.FC = () => {
  const title = "Master Coding, One Cheat Sheet at a Time.";
  const description =
    "Dive into our expansive collection of cheat sheets tailored for coding enthusiasts. From HTML, CSS, and JavaScript, to advanced languages like Python and Rust, we provide concise and practical guides to accelerate your learning journey. Unravel the intricacies of programming languages and frameworks, and amplify your coding skills with us.";
  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate">
          <GridLine />
          <Background />
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {title}
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    {description}
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative p-4">
                      <img
                        src={items.typescript.src}
                        alt={items.typescript.alt}
                        className="aspect-[1/1] w-full rounded-xl bg-transparent object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative p-4">
                      <img
                        src={items.javascript.src}
                        alt={items.javascript.alt}
                        className="aspect-[1/1] w-full rounded-xl bg-transparent object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative p-4">
                      <img
                        src={items.react.src}
                        alt={items.react.alt}
                        className="aspect-[1/1] w-full rounded-xl bg-transparent object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative p-4">
                      <img
                        src={items.tailwind.src}
                        alt={items.tailwind.alt}
                        className="aspect-[1/1] w-full rounded-xl bg-transparent object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative p-4">
                      <img
                        src={items.firebase.src}
                        alt={items.firebase.alt}
                        className="aspect-[1/1] w-full rounded-xl bg-transparent object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Hero;
