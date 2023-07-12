import Path from "@/libs/constants/Path";
import { twclsx } from "@/libs/twclsx";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className={twclsx("max-w-lg mx-auto text-center my-20")}>
      <p className={twclsx("text-emerald-600 font-light mb-7")}>
        © Copyright 2021 - 2023 Abyditya
      </p>
      <p className={twclsx("my-4 text-gray-400 mb-10")}>
        "Be who you are and say what you feel, because those who mind don&apos;t
        matter, and those who matter don&apos;t mind."; ― Bernard M. Baruch.
      </p>
      <div className={twclsx("flex justify-center")}>
        <ul className={twclsx("flex items-center gap-7")}>
          {Path.links.map((x) => {
            return (
              <li key={x.label}>
                <Link
                  className={twclsx(
                    "text-gray-200 underline hover:no-underline"
                  )}
                  href={x.path}
                >
                  {x.path}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
