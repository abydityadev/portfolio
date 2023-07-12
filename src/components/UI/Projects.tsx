"use client";

import React, { useEffect, useState } from "react";
import { Repository } from "@/libs/types";
import Link from "next/link";
import { twclsx } from "@/libs/twclsx";

function ProjectCard() {
  const [repo, setRepo] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/abydityadev/repos?sort=created&direction=desc"
    )
      .then((res) => res.json())
      .then((data: any) => {
        if (Array.isArray(data)) setRepo(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={twclsx("grid grid-cols-1 sm:grid-cols-2 gap-3 my-3")}>
      {repo
        .map((x) => (
          <Link
            href={x.html_url}
            className={twclsx("border border-zinc-600 p-3 rounded-md")}
            key={x.name}
          >
            <h1 className="text-sm font-medium sm:text-xl">
              <span className={twclsx("text-gray-300")}>{x.owner.login}</span>/
              {x.name}
            </h1>
            <p className={twclsx("text-gray-300 mt-2")}>{x.description}</p>
          </Link>
        ))
        .slice(0, 4)}
    </div>
  );
}

export default function Projects() {
  const [repo, setRepo] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/abydityadev/repos?sort=created&direction=desc"
    )
      .then((res) => res.json())
      .then((data: any) => {
        if (Array.isArray(data)) setRepo(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="pb-8 mb-8">
      <h1 className={twclsx("text-2xl font-medium mt-[1.5rem] ")}>
        Projects{" "}
        <span className={twclsx("text-gray-300")}>&#40;{repo.length}&#41;</span>
      </h1>
      <ProjectCard />
      <a href="https://github.com/abydityadev" target="_blank">
        View more →
      </a>
    </section>
  );
}
