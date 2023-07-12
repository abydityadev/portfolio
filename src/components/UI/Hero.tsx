import React from "react";
import Badge from "../Common/Extra/Badge";

export default function Hero() {
  return (
    <section className="border-b border-b-zinc-800">
      <h1 className="text-2xl font-medium">Howdy, I&apos;m abyditya 👋</h1>
      <p className="my-8 text-gray-300">
        I&apos;m a self taught <Badge>FrontEnd</Badge> developer, optimist,
        NextJS enthusiast, and community builder. I currently work as the
        President of Developer Experience at <Badge>HaktivLab</Badge>, where I
        lead the community there, a massive development community based in Asia.
      </p>
    </section>
  );
}
