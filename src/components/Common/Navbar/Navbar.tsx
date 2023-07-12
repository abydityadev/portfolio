"use client";

import Link from "next/link";
import React from "react";

import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

import { twclsx } from "@/libs/twclsx";
import Path from "@/libs/constants/Path";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="max-w-xl mx-auto py-16">
      <div className="flex justify-between">
        <ul className="flex items-center gap-5">
          {Path.links.map((q, index) => {
            return (
              <li key={index}>
                <Link
                  href={q.path}
                  className={twclsx(
                    " font-medium  underline underline-offset-3 hover:no-underline"
                  )}
                >
                  {q.path}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <a href="https://github.com/abydityadev" target="_blank">
              <FaGithub className="text-2xl text-gray-400 hover:text-white" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
