'use client'
import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function Carousel({ children, plugins = [], className, ...props }: any) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, plugins);

    return (
        <div className={`overflow-hidden ${className}`} ref={emblaRef} {...props}>
            <div className="flex">{children}</div>
        </div>
    );
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
    return <div className="flex">{children}</div>;
}

export function CarouselItem({ children }: { children: React.ReactNode }) {
    return <div className="min-w-full">{children}</div>;
}

export function CarouselNext() {
    const emblaApi = useRef<any>(null);

    return (
        <button
            className="absolute right-0 bg-gray-800 text-white p-2"
            onClick={() => emblaApi.current?.scrollNext()}
        >
            Next
        </button>
    );
}

export function CarouselPrevious() {
    const emblaApi = useRef<any>(null);

    return (
        <button
            className="absolute left-0 bg-gray-800 text-white p-2"
            onClick={() => emblaApi.current?.scrollPrev()}
        >
            Previous
        </button>
    );
}
