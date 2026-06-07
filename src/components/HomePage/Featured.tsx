import { useContext } from "react";
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { NavigationContext } from "../../App";

const PRODUCTS = [
    {
        name: "Arc Chair",
        price: "$1,250",
        rating: "4.9",
        reviews: "124",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLKJiTLJb3TA7YnDRd655nBMXXn3KGpv3oru3nAqOcZ36KPaoZxDkssptlLLUmnCk2D331LnlLULKlhjhHqvVsFXil5b9oXV8hyHveQljBKvARVUzQafN1djUFdVPQJH_GHU88gMk8npkq5kFNtpxd-DMZeC0fZlxN3rhafwuSyXJrGl5EL13UjssSe2tunYmLmmZEfku0V_z6a-cabi1dyHG96S7hGMiobjLy144fHmoBVU9R_W_LXh7J3FMfTz39C5ieDy-aaC8"
    },
    {
        name: "Stone Plinth",
        price: "$890",
        rating: "5.0",
        reviews: "86",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfrJhy8FiUAleEmydGNRYeFXO2TeQbxTAWpHtOQgpZW66X0Kwjb79u5I5Z7nXShRZ997PlUoBLtg7TvIOL-jH9qBkDUHv9IEWjOUnDoey26_sLlyq9uIFJnwiRxS15swUyvQIm5nhSfHGVBHC8Ed-_3cONzNu4iRFX0SGM5183v2_KdipY9VYDixS_7prquCy5-S1ZXs4TeNnqKZ8WhL6TJV7Bwuiy6OCJbHXdUfGk4CwtehGoZaTOhj_22Hn51l2lAy3bIHgyBug"
    },
    {
        name: "Lune Floor Lamp",
        price: "$420",
        rating: "4.8",
        reviews: "210",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgZHDIz5u-kJXorJLFNJQlzaT8rjaDYPUiBcr-Bm6Ud2F3Auftb4gvHt6IIkWD_gQPjmDFMkTjh2wDdwXxgcaXhxR_GnBCqgIf72oC51siuaTPPZWHt_ifjZaA02-antqCyljYuYbkmEgATBkzEodFYC-kzMTIL8m6NfYZK16z3Y0jJ-C_7Pm21MCiyEapPpqyEZhsOHV_jFvoNTIz49XfT-2rr804tH35PQiBY5RHF-6ozDIxyizsT7tECi6Dy_xDCqPVY4Pf8wY"
    }
];

// Duplicate list to create a smooth, endless marquee loop across the viewport
const DUP_PRODUCTS = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

export default function Featured() {
    const { setView } = useContext(NavigationContext);

    const handleProductClick = (productName: string) => {
        if (productName === "Arc Chair") {
            setView('product');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="py-xl bg-surface-container-low overflow-hidden">
                {/* Constrained Header Container */}
                <div className="max-w-[1440px] mx-auto px-margin mb-xl">
                    <div className="text-center">
                        <h2 className="font-headline-lg text-headline-lg text-primary">Featured Pieces</h2>
                        <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Icons of modern craftsmanship.</p>
                    </div>
                </div>

                {/* Full-width Carousel Section */}
                <div className="relative flex w-full flex-col gap-10 items-center justify-center">
                    <ScrollVelocityContainer className="w-full">
                        {/* Row A: Scrolls Right */}
                        <ScrollVelocityRow baseVelocity={3} direction={1} className="py-4">
                            {DUP_PRODUCTS.map((prod, idx) => (
                                <div key={`row-a-${idx}`} className="mx-6 inline-block w-97 text-left group cursor-pointer" onClick={() => handleProductClick(prod.name)}>
                                    <div className="relative rounded-2xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-all duration-300 aspect-square bg-surface">
                                        <img
                                            src={prod.image}
                                            alt={prod.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="flex justify-between items-start px-1">
                                        <div>
                                            <h3 className="font-body-lg text-body-lg text-primary font-medium">{prod.name}</h3>
                                            <div className="flex items-center gap-1 mt-1 text-on-surface-variant">
                                                <span className="material-symbols-outlined text-[16px] text-amber-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="font-caption text-caption">{prod.rating} ({prod.reviews} reviews)</span>
                                            </div>
                                        </div>
                                        <p className="font-label-md text-label-md text-primary font-semibold">{prod.price}</p>
                                    </div>
                                </div>
                            ))}
                        </ScrollVelocityRow>
                    </ScrollVelocityContainer>

                    {/* Premium soft edge fade vignettes */}
                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/12  to-transparent z-10"></div>
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/12  to-transparent z-10"></div>
                </div>
            </section>
        </>
    );
}