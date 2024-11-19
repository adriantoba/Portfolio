"use client";
import React from "react";
import { CircleUserRound, ExternalLink } from "lucide-react";

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textColor?: string;
  buttonOverlayColor?: string;
  borderColor?: string;
  iconColor?: string;
  className?: string;
  iconType?: "contact" | "resume";
}

export default function ArrowButton({
  text = "Open",
  textColor = "var(--text)",
  buttonOverlayColor = "var(--brand)",
  borderColor = "var(--brand)",
  iconType = "contact",
  iconColor = "var(--text)",
  className,
  ...props
}: ArrowButtonProps) {
  return (
    <button
      // style={{ borderColor: borderColor }}
      {...props}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 dark:border-[var(--brand)] bg-background px-6 py-3 font-medium shadow-md transition duration-300 ease-out ${className} border-black w-64`}
    >
      <span
        style={{ background: buttonOverlayColor }}
        className={`ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-400 text-white duration-300 group-hover:translate-x-0`}
      >
        {iconType === "contact" && (
          <CircleUserRound style={{ color: iconColor }} />
        )}
        {iconType === "resume" && <ExternalLink style={{ color: iconColor }} />}
      </span>
      <span
        style={{ color: textColor }}
        className={`
          absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover:translate-x-full bg-[var(--background)]`}
      >
        {text}
      </span>
      <span className="invisible relative">Button</span>
    </button>
  );
}
