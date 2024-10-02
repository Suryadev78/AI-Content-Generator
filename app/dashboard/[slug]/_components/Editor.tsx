"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
export default function Editor({ value }: { value: string }) {
  const Quill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  return <Quill value={value} className="h-[300px] w-full mt-3 " />;
}
