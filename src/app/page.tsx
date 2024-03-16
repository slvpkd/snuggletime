"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<>     

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474_1280.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:pt-8">
              <h3 className="text-black-800 mb-8 text-2xl font-bold sm:text-2xl md:mb-12 md:text-4xl">
                Imagine, Personalise, Create
              </h3>

              <motion.p 
               animate={{ opacity: 1 }}
               transition={{ ease: "easeOut", duration: 2 }}
              
              className="mb-8 leading-relaxed text-gray-500 md:mb-12  xl:text-lg">
                Introducing SnuggleTime AI, an enchanting app that creates
                personalized children's short stories. With its advanced natural
                language processing, SnuggleTime AI crafts captivating tales
                tailored to spark imagination and creativity in young minds. By
                inputting preferences, parents can watch as this magical app
                generates unique and interactive stories, fostering a love for
                reading and storytelling. SnuggleTime AI is the perfect
                companion for parents seeking to cultivate their child's
                imagination and create cherished bedtime moments.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-0 md:divide-x">
            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                10
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Locations
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                37
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Characters
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                21
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Character Traits
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                15
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Scenarios
              </div>
            </div>
            <div className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                6.9M
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Posibilities
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12 lg:px-20">
          <div className="mx-auto max-w-screen-3xl px-4 md:px-8">
            <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
              <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                  Lets begin our adventure together...
                </h2>

                <p className="mb-8 max-w-md text-gray-400">
                  Are you a couragous lion, or a brave knight, or even a chatty
                  parrot. Lets create a magical story together.
                </p>

                <div className="mt-auto">
                  <Link
                    href="/seasons"
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    Lets go...
                  </Link>
                </div>
              </div>

              <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                <img
                  src="./assets/begin.jpeg"
                  loading="lazy"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
  </>
  );
}
