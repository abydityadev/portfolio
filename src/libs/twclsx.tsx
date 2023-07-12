import clsx from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const twclsx = (...args: ClassValue[]) => twMerge(clsx(...args));
