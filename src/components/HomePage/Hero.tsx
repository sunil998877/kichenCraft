import { useState, useEffect } from "react";
import { heroSlides } from "../../../data/hero";
import { Lens } from "@/components/ui/lens";

const slides = heroSlides;

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(timer);
    }, [currentSlide, isAnimating]);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 800);
    };

    return (
        <section className="relative w-full h-[760px] md:h-[840px] flex items-center overflow-hidden bg-surface">
            <Lens zoomFactor={1.5} lensSize={220} className="w-full h-full flex items-center rounded-none" ariaLabel="Hero Lens">

                <div className="absolute inset-0 z-0">
                    {slides.map((slide, idx) => {
                        const isActive = idx === currentSlide;
                        return (
                            <div
                                key={idx}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                                        }`}
                                />

                                <div className="absolute inset-0 bg-gradient-to-r from-surface/50 via-surface/20 to-transparent md:from-surface/60 md:via-surface/30 md:to-transparent/5 z-10"></div>
                            </div>
                        );
                    })}
                </div>


                <div className="relative z-20 max-w-[1440px] mx-auto px-margin w-full flex items-center -mt-[60px] md:-mt-[100px]">
                    <div className="max-w-2xl md:pl-4">
                        {slides.map((slide, idx) => {
                            const isActive = idx === currentSlide;
                            if (!isActive) return null;

                            return (
                                <div
                                    key={idx}
                                    className="animate-fade-in-up"
                                    style={{
                                        animation: "slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                                    }}
                                >
                                    <span className="tracking-[0.25em] text-xs font-semibold text-primary/60 uppercase mb-sm block">
                                        {slide.tagline}
                                    </span>
                                    <h1 className="font-display-lg text-display-lg text-primary mb-md leading-[1.1] tracking-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-[520px] leading-relaxed">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-wrap items-center gap-md">
                                        <button className="bg-primary text-on-primary px-lg py-md rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-[2px] active:translate-y-0">
                                            {slide.cta}
                                        </button>
                                        <button className="border border-primary/20 text-primary hover:bg-primary/5 px-lg py-md rounded-xl font-label-md text-label-md transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0">
                                            View Collection
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="absolute bottom-[40px] left-0 right-0 z-30 max-w-[1440px] mx-auto px-margin w-full flex justify-between items-center">

                    <div className="flex items-center gap-md">
                        {slides.map((_, idx) => {
                            const isActive = idx === currentSlide;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className="group flex items-center gap-2 cursor-pointer focus:outline-none"
                                >
                                    <span
                                        className={`font-label-md text-xs transition-colors duration-300 ${isActive ? "text-primary font-bold" : "text-primary/40 group-hover:text-primary/70"
                                            }`}
                                    >
                                        0{idx + 1}
                                    </span>
                                    <div
                                        className={`h-[2px] transition-all duration-500 ease-out ${isActive
                                            ? "w-[40px] bg-primary"
                                            : "w-[12px] bg-primary/20 group-hover:w-[20px] group-hover:bg-primary/40"
                                            }`}
                                    />
                                </button>
                            );
                        })}
                    </div>


                    <div className="flex gap-sm">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous Slide"
                            className="w-[48px] h-[48px] flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next Slide"
                            className="w-[48px] h-[48px] flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </Lens>


            <style>{`
                @keyframes slideUpFade {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}