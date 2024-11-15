import { CircleUserRound, ExternalLink } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  iconType: "contact" | "resume";
}

export const DotExpandButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, iconType, onClick }, ref) => {
    return (
      <button
        className="group flex bg-[var(--brand)]  text-galactic-primary font-semibold h-20 items-center gap-2 rounded-full bg-galactic-accent pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700"
        ref={ref}
        onClick={onClick}
      >
        <span className="rounded-full bg-transparent  text-sm transition-all duration-300 group-hover:bg-white group-hover:p-3">
          {iconType === "resume" && (
            <ExternalLink className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
          )}
          {iconType === "contact" && (
            <CircleUserRound className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
          )}
        </span>
        <span className="">{text}</span>
      </button>
    );
  }
);
