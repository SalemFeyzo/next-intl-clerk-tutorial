import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ImageLoader, ImageLoaderProps } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const contentfulImageLoader: ImageLoader = (props: ImageLoaderProps) => {
  return `${props.src}?w=${props.width}&q=${props.quality || 75}`;
};
