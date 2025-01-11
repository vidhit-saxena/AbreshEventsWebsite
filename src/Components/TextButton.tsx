// src/app/components/TextButton.tsx
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (
    props: ComponentPropsWithoutRef<'button'> & { color?: string }
) => {
    const { className, children, color, onClick, ...rest } = props;
    
    return ( 
        <button 
            className={twMerge(
                "text-sm font-heading uppercase font-extrabold tracking-wider text-fuchsia-500 hover:opacity-80 transition-opacity duration-300",
                color === "lime" && "text-lime-500",
                color === "cyan" && "text-cyan-500",
                color === "violet" && "text-violet-500",
                className
            )}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
};