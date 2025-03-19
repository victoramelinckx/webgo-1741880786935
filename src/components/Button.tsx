"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, useState } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  color?: BgButtonColors;
  borderColor?: BorderButtonColors;
}

export const Button = ({
  title,
  borderColor,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `${
          borderColor ? "border-2 py-3" : "py-[14px]"
        } px-5 rounded-xl text-[18px] text-black bg-blue-500 border  border-black/10 border-solid shadow font-semibold h-fit hover:opacity-70 active:opacity-70`,
        borderColor,
        className
      )}
      {...props}
    >
      {title}
    </button>
  );
};
