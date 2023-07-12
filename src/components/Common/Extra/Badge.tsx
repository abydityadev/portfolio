import React from "react";

export default function Badge({ children }: any) {
  return (
    <span className="bg-zinc-900 p-1 rounded border border-zinc-800">
      {children}
    </span>
  );
}
