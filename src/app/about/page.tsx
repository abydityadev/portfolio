import React from "react";

export default function page() {
  return (
    <section>
      <div className="border-b border-b-zinc-800 mb-10">
        <h1 className="text-6xl font-medium mb-8">About</h1>
      </div>
      <p className="my-5">
        Ayo What's Good?! I'm a 14 y/o self-taught developer from Indonesia and
        I like to build cool stuff. I'm interested in web development, databases
        and I use NextJS. I'm a huge fan of making, reading and contributing to
        open source.
      </p>
      <p className="my-5">
        Programming since 5th grade, I've learned a lot about Web Development. A
        large proportion of my life is spent listening to all sorts of pop,
        jazz, soft rock musics.
      </p>
      <div className="mb-10 mt-20">
        <h1 className="text-4xl font-medium mb-8 sm:text-6xl border-b border-b-zinc-800 pb-7">
          Experience
        </h1>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              My journey start here!
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              in april 2020, i felt very bored at home since i heard about the
              covid 19 case in the news, so i learned something new, Yes i learn
              HTML & CSS because i have wanted to make a website since i was a
              child
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              October 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Starting a new hobby!
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              i thought of a way to make myself interesting, so i started my new
              hobby which is playing musical instruments, yes i can play some
              musical instruments like piano, & guitar, i might start a music
              band soon
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
