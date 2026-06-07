import { useState } from "react";

const IMAGES = [
    {
        id: "main",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeQ5KzrpFrLB03Y4AkndVZTAk7CiP5AXj06zYt458605kvyn6uJ3ncaE_dUlDJTuqNuefYNmwqfonaACj3z2qq2HEI12GGDO6n6CtZNB-I6CroVtfRRyeOXy5Vb5DEt9RHPviPYXl1UcBv2m2lYc34l7ckIJaOeGEhkrdGT5hG8FPLLRYmrrzLIfmPzcKNUEcWhKtTIwZMXZv6NjWkdI5ehrnWoKI8FQcJqlsxK44ha8I18eKW2TA2Y_xwdivdnmpmGwQA0netiE4",
        alt: "A luxurious Arc Lounge Chair featuring a minimalist architectural silhouette with curved wooden arms and plush cream-colored upholstery in a sun-drenched, high-end residential interior.",
    },
    {
        id: "frame",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAZz-F6AWk8KOzDIi-z0OVEW28Lz1un70i3W8W6vVYycVboq3i7A5BZ9g24vDKNVugbTwRIYBApXRBGJYZyFrPU7yBE0DM8io9Pg1juXUWZ1RJdekjgtf3g29EnlKecWqWCeQQdE0jZjwUBzZ5dQhLEtaz1EEifXCNpYOejg0gKah4cwjTvhhSekfvTFRwetoVkkV6Llh5dlGQnBGng7PFO5LRutfXhowYKBcZNY6RDd6t0pJ-jqfGl8be-vC2rhgWQa1jnFIEv-o",
        alt: "Close-up detail of the Arc Lounge Chair's fine-grained oak wood frame and seamless joinery under matte finish.",
    },
    {
        id: "texture",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWEIDz-6J4EP9qQhLSeAF1FC90QiqZgifDlkBFq-_siNUBsIOVVnjM73QbHewapw5c3Zuz8uv-pdEoY688v4Q-8ior3_5KJq9MGIaNJEie_TiwspfucXXzz5MCoRD_VAhgy8_jeTe0TCgt32feJBM3WeDLxdhbTm5QDAsXY079k-R0jQvZ9hzO5Uhz8FbDl6W7eHB86WnJKeT-_md90ZQP-5QKDrFUryg0pvdoealCpE9s-G9rLx7uIOBp6QBNYRvskGr3uPjyZlE",
        alt: "Detailed macro shot of the premium boucle fabric texture showing off-white fibers.",
    },
    {
        id: "styled",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMMJYLy2whLzDUVd5CRlHNTLZtZ7QQRP6njsN8iVxbbE8JLwKagw3WxtRVYCyb8FXmzaWjGXG8ITDIncPqINP4HpWUzvMzHt8oN2IBQ4cwuzHa59No-VdnzKm4Nd0LxJTx1sLq-x-OSBfEvBG3o_x_7pdNc-Yph5K-QPWxUUgU981lsSebf1aTR1cyuYF0KIN7uM2ECtVOkp3-dciLnm9-FsLHHafmjxwv6UjgdrB2E8MmJ04H8eQ26YL3UCr0EGSKBFkbMsfMUvo",
        alt: "Wide angle shot of the Arc Lounge Chair styled in a modern living room with a minimalist coffee table.",
    },
];

export default function ProductGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const handleThumbnailClick = (index: number) => {
        if (index === activeIndex) return;
        setFade(true);
        setTimeout(() => {
            setActiveIndex(index);
            setFade(false);
        }, 150); // fast transition
    };

    return (
        <div className="space-y-md">
            {/* Main Interactive Display Image */}
            <div className="rounded-xl overflow-hidden soft-shadow bg-surface-container-low aspect-[4/5] relative">
                <img
                    src={IMAGES[activeIndex].src}
                    alt={IMAGES[activeIndex].alt}
                    className={`w-full h-full object-cover transition-opacity duration-150 ${
                        fade ? "opacity-30" : "opacity-100"
                    }`}
                />
            </div>

            {/* Thumbnail Navigation Row */}
            <div className="grid grid-cols-4 gap-md">
                {IMAGES.map((img, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <div
                            key={img.id}
                            onClick={() => handleThumbnailClick(idx)}
                            className={`aspect-square rounded-xl overflow-hidden bg-surface-container-low cursor-pointer transition-all duration-300 ${
                                isActive
                                    ? "opacity-100 ring-2 ring-primary ring-offset-2 scale-[0.98]"
                                    : "opacity-60 hover:opacity-100"
                            }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
