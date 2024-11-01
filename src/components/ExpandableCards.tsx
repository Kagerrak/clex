"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Badge } from "./ui/badge";

export function ExpandableCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[70%]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  unoptimized
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="bg-[#FFF0CE] dark:bg-neutral-900">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.div
                      layoutId={`description-${active.description}-${id}`}
                      className="relative w-full h-[5px] flex"
                    >
                      <div className="absolute left-0 w-[20%] h-full bg-[#a67b2c]" />
                      <div className="absolute right-0 w-[75%] h-full bg-[#0088b2]" />
                    </motion.div>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-xl mx-auto w-full flex flex-row gap-4 justify-center overflow-x-auto p-2">
        {cards.map((card) => (
          <motion.button
            layoutId={`button-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            className="px-4 py-2 text-sm rounded-full font-bold bg-[#A67B2C] hover:bg-[#088AB5] hover:text-white text-black hover:mask-none mask-bottom"
            onClick={() => setActive(card)}
          >
            {card.ctaText}
          </motion.button>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Our Vision & Mission",
    title: "Vision & Mission",
    src: "/cards/mis-vis.png",
    ctaText: "Our Vision & Mission",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge className="bg-blue-100 text-blue-900 mb-2">Vision</Badge>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To be the leading tech-driven customs brokerage and logistics firm
              in the Philippines, recognized for our efficiency, reliability,
              and client-centric approach, facilitating seamless global trade
              for businesses of all sizes.
            </p>
          </div>

          <div className="space-y-2">
            <Badge className="bg-blue-100 text-blue-900 mb-2">Mission</Badge>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To revolutionize customs brokerage and logistics in the
              Philippines by harnessing advanced technology and delivering
              unparalleled customer service, ensuring smooth and expedited trade
              operations for our clients.
            </p>
          </div>
        </div>
      );
    },
  },
  {
    description: "Our Core Values",
    title: "Core Values: CLEX",
    src: "/cards/values.png",
    ctaText: "Our Core Values",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <Badge className="bg-yellow-100 text-yellow-900">01</Badge>
                CLIENT-CENTRIC
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                We put our clients at the heart of everything we do. Their
                success is our success, and we strive to exceed their
                expectations in every interaction.
              </p>
            </div>

            {/* ... Add other core values similarly ... */}
          </div>
        </div>
      );
    },
  },
  {
    description: "Get in Touch",
    title: "Contact Us",
    src: "/cards/contact.png",
    ctaText: "Contact Us",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-900 dark:text-blue-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-gray-700 dark:text-gray-300">
                Block 2 Lot 5, Dreamland, Hagonoy,
                <br />
                Taguig City, NCR, PH, 1630
              </p>
            </div>
            {/* ... Add other contact information similarly ... */}
          </div>
        </div>
      );
    },
  },
];
