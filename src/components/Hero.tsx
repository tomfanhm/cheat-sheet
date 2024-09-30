import React from "react";
import Background from "./Background";
import { Icons } from "./Icons";

const GridLine = () => {
  return (
    <svg
      className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-foreground/20 [mask-image:radial-gradient(32rem_32rem_at_center,hsl(var(--background)),transparent)]"
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
      <svg x="50%" y={-1} className="overflow-visible fill-foreground/10">
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

const Hero: React.FC = () => {
  const title = "Master Coding, One Cheat Sheet at a Time.";
  const description =
    "Dive into our expansive collection of cheat sheets tailored for coding enthusiasts. From HTML, CSS, and JavaScript, to advanced languages like Python and Rust, we provide concise and practical guides to accelerate your learning journey. Unravel the intricacies of programming languages and frameworks, and amplify your coding skills with us.";
  return (
    <div className="bg-background">
      <main>
        <div className="relative isolate">
          <GridLine />
          <Background />
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    {title}
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-foreground/70 sm:max-w-md lg:max-w-none">
                    {description}
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative p-4">
                      <Icons.typescript className="h-auto w-full" />
                      <span className="sr-only">Typescript SVG</span>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative p-4">
                      <Icons.javascript className="h-auto w-full" />
                      <span className="sr-only">JavaScript SVG</span>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring/10" />
                    </div>
                    <div className="relative p-4">
                      <Icons.react className="h-auto w-full" />
                      <span className="sr-only">React SVG</span>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative p-4">
                      <Icons.tailwind className="h-auto w-full" />
                      <span className="sr-only">Tailwind SVG</span>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring/10" />
                    </div>
                    <div className="relative p-4">
                      <Icons.firebase className="h-auto w-full" />
                      <span className="sr-only">Firebase SVG</span>
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-ring/10" />
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
