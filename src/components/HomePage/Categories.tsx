import { useState, useEffect } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { categories } from "../../../data/categories";



export default function Categories() {
    const [api, setApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };

        onSelect();
        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    const handlePrev = () => {
        api?.scrollPrev();
    };

    const handleNext = () => {
        api?.scrollNext();
    };

    return (
        <>
            <section className="py-xl max-w-[1440px] mx-auto px-margin">

                <div className="flex justify-between items-end mb-lg">
                    <div>
                        <h2 className="font-headline-lg text-headline-lg text-primary">Explore Categories</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Curated selections for every room.</p>
                    </div>
                    <a className="font-label-md text-label-md text-primary border-b border-primary pb-1" href="#">View All</a>
                </div>


                <div className="relative px-6 md:px-0">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                        }}
                        className="w-full relative group/carousel"
                    >
                        <CarouselContent className="-ml-gutter">
                            {categories.map((category, index) => (
                                <CarouselItem key={index} className="pl-gutter basis-1/2 md:basis-1/4">
                                    <div className="group cursor-pointer">
                                        <div className="aspect-[3/4] overflow-hidden rounded-xl mb-sm bg-surface-container">
                                            <img
                                                alt={category.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                src={category.src}
                                            />
                                        </div>
                                        <p className="font-label-md text-label-md text-primary">{category.name}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>


                        <button
                            onClick={handlePrev}
                            disabled={!canScrollPrev}
                            aria-label="Previous Slide"
                            className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-background border border-primary/20 text-primary hover:bg-primary hover:text-on-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        </button>


                        <button
                            onClick={handleNext}
                            disabled={!canScrollNext}
                            aria-label="Next Slide"
                            className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-[48px] h-[48px] flex items-center justify-center rounded-full bg-background border border-primary/20 text-primary hover:bg-primary hover:text-on-primary disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </Carousel>
                </div>
            </section>
        </>
    );
}