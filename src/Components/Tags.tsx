import { HTMLAttributes } from "react";
import {twMerge} from "tailwind-merge"


export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const {className, children, ...otherProps} = props;
    return ( 
        <div className={twMerge("inline-flex border font-bold border-white gap-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text [-webkit-background-clip:text] px-3 py-1 rounded-lg uppercase items-center", className)} {...otherProps}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}




