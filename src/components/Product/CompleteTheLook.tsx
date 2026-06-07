import { useState } from "react";

const ACCESSORIES = [
    {
        id: "side-table",
        name: "Orbital Side Table",
        price: "$850.00",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzUdAUU0X3Mc941hGioHpJVuziSX9SrKnqK8eed7x1a9z6FrZu4A_NuouXzLpOVohKF1uFqrHJzoG9AYu_Tk2o--f4g8-eLAgPHA5kSYb6CO7IHRuilDtfjNOwunGQP2diR3v_WHAlUHbJ_vUl0prkH6h08n8xYcZPFgh4wc7jX1Q4bctIOLjF-AxaUGZ_XgTDECKbUEExT4yD2rylfrMRhsiZueUIS4h8Y2x-lFJf2vMqIH5lcfYYYTTvLnmbR39v1dS0L2ahy-Q",
        alt: "A minimalist architectural side table crafted from solid walnut, featuring a cylindrical base and a thin circular top."
    },
    {
        id: "loom-rug",
        name: "Tonal Loom Rug",
        price: "$1,200.00",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ugigFnPlww-cQN9P9xevdaEwcMVPWnFvpQL4CSFPp74BV4KNRAtjQZEHpYp00qHfqbRPh0OSxX-7hc9id7ZaG5rpZCKxgju3CUOyjyvUovT5zrVxFDANyCwulorADDCvZWjNmRDpme0UXwkRjat-DjBj3VxWzbXKU81h1AxRKmUKTc2DmFl-YdfXJHr_UVEqwStUlYunx_JTE5KqzCd4AzyPxY_6-AzcfXodilvx1bEzTgKIAYj-m1i0w4fxKE77rW69xsYBRu8",
        alt: "A large hand-woven area rug with a subtle geometric pattern in tonal cream and sand hues."
    },
    {
        id: "floor-lamp",
        name: "Linear Bronze Floor Lamp",
        price: "$420.00",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpmfbUWuC7hQtSTDZSzzcyckT80jtY9473kHwfEC0V42Ur-HlFTn980PQT16KOKnSDyLO2DTq_C2JqBbnid60yD5FJj9fMWICgwuDfxCgPthFRDWLkWYAuF4oHR1MILcQAP2MB7Le5LCIn42woi8dEGIMvvMjjc9JU1Eoa1NSboyfnQKAs5d9ud-6YEmsLu8BsK_DUtnyzMWf_nsL44vPnDLMLagmFran26i59U30DmVpnq-jvK0l4pZnWhwEMLGTB8_GjqenmspQ",
        alt: "An elegant floor lamp with a slim bronze neck and a pleated fabric shade."
    },
    {
        id: "ceramic-set",
        name: "Sculptural Ceramic Set",
        price: "$320.00",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnMEZah3_ldGsk5aE9MJAEsIgtqG4hs9nJMA7xkhkMJtD40NFvyrp7SGOFCgGBtKybuVS02l1xfMpmYHGDoA5h1047WiMyteZn2iFp57iOwlXZ3VvA4ARhtnei2LO6ESBGcu7dDed2Pd89tUGhTyq_x6U3GAtbi6LhWkZRmUvO1HkS6tTuPsHkOeLXLnW1Wggc6WmnBTOIhT9KWgzfvhcRfK1lfGQ_XE5Q6k0n8jeM3hdraHQQmz6G90aKdko9-tVvJRzjOgbDEmU",
        alt: "A set of handcrafted ceramic vases in organic, asymmetrical shapes with a matte stone-gray glaze."
    }
];

export default function CompleteTheLook() {
    const [addedItem, setAddedItem] = useState<string | null>(null);

    const handleQuickAdd = (name: string) => {
        setAddedItem(name);
        setTimeout(() => {
            setAddedItem(null);
        }, 3000);
    };

    return (
        <section className="mt-xl py-xl border-t border-outline-variant relative">
            {/* Quick Add Feedback Toast */}
            <div
                className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center gap-2 font-label-md text-label-md ${
                    addedItem ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
                }`}
            >
                <span className="material-symbols-outlined text-green-400">check</span>
                <span>Added {addedItem} to cart</span>
            </div>

            <div className="flex justify-between items-end mb-lg">
                <div>
                    <h2 className="font-headline-lg text-headline-lg text-primary">Complete the Look</h2>
                    <p className="text-on-surface-variant font-body-md text-body-md">Curated pieces to elevate your sanctuary.</p>
                </div>
                <div className="flex gap-sm">
                    <button className="p-sm rounded-full border border-outline-variant hover:bg-surface-container transition-colors cursor-pointer active:opacity-75">
                        <span className="material-symbols-outlined">west</span>
                    </button>
                    <button className="p-sm rounded-full border border-outline-variant hover:bg-surface-container transition-colors cursor-pointer active:opacity-75">
                        <span className="material-symbols-outlined">east</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                {ACCESSORIES.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-low mb-sm transition-all hover-shadow">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={item.img}
                                alt={item.alt}
                                loading="lazy"
                            />
                            {/* Quick Add overlay button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Avoid triggering card navigation
                                    handleQuickAdd(item.name);
                                }}
                                className="absolute bottom-4 right-4 bg-surface/90 hover:bg-surface backdrop-blur-md p-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer duration-300 shadow-sm flex items-center justify-center hover:scale-110 active:opacity-80"
                                title={`Add ${item.name} to cart`}
                            >
                                <span className="material-symbols-outlined text-primary font-bold">add</span>
                            </button>
                        </div>
                        <p className="font-label-md text-label-md text-primary">{item.name}</p>
                        <p className="text-on-surface-variant font-caption text-caption">{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
