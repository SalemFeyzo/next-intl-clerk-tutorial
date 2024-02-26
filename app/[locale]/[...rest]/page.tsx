import { notFound } from "next/navigation";
import type { ServerRuntime } from "next";

export const runtime: ServerRuntime = "edge";

export default function CatchAll() {
  notFound();
}
