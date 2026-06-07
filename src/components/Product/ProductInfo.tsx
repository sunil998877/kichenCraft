import { useState } from "react";

const MATERIALS = [
    { id: "cream", color: "#F2EDE4", name: "Boucle Cream" },
    { id: "walnut", color: "#4A3F35", name: "Walnut Dark" },
    { id: "charcoal", color: "#2D2D2D", name: "Charcoal Gray" },
];

export default function ProductInfo() {
    const [selectedMaterial, setSelectedMaterial] = useState("cream");
    const [dimensionsOpen, setDimensionsOpen] = useState(false);
    const [sustainabilityOpen, setSustainabilityOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const activeMaterial = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];

    const handleAddToCart = () => {
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <div className="space-y-lg relative">
            {/* Added to Cart Feedback Toast */}
            <div
                className={`fixed top-24 right-4 md:right-8 bg-primary text-on-primary px-6 py-4 rounded-xl shadow-lg transition-all duration-300 z-50 flex items-center gap-3 ${showToast ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
                    }`}
            >
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <div>
                    <p className="font-label-md text-label-md font-bold">Added to Cart</p>
                    <p className="text-xs text-on-primary-container">
                        Arc Lounge Chair ({activeMaterial.name})
                    </p>
                </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-sm">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest block">
                    Lounge Collection
                </span>
                <h1 className="font-display-lg text-display-lg text-primary">Arc Lounge Chair</h1>
                <p className="font-headline-lg text-headline-lg text-primary">$2,450.00</p>
            </div>

            {/* Description */}
            <div className="space-y-md">
                <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                    A testament to architectural precision and organic warmth. The Arc Lounge Chair features a handcrafted solid oak frame that cradles deep, high-resiliency foam cushions upholstered in our signature sustainable boucle.
                </p>
                <div className="flex items-center gap-xs text-primary py-xs">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                    </span>
                    <span className="font-label-md text-label-md text-primary">Ready in 5-7 days</span>
                </div>
            </div>

            {/* Customization Options */}
            <div className="space-y-md pt-md border-t border-outline-variant">
                <div>
                    <span className="font-label-md text-label-md text-primary block mb-2">
                        Material: <span className="font-normal text-on-surface-variant">{activeMaterial.name}</span>
                    </span>
                    <div className="flex gap-sm mt-sm">
                        {MATERIALS.map((mat) => {
                            const isSelected = mat.id === selectedMaterial;
                            return (
                                <button
                                    key={mat.id}
                                    onClick={() => setSelectedMaterial(mat.id)}
                                    className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 ${isSelected
                                        ? "border-2 border-primary ring-offset-2 ring-1 ring-primary scale-95"
                                        : "border border-outline-variant hover:scale-105"
                                        }`}
                                    style={{ backgroundColor: mat.color }}
                                    aria-label={`Select ${mat.name}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col gap-sm pt-xl">
                <button
                    onClick={handleAddToCart}
                    className="w-full bg-primary text-on-primary py-md px-lg rounded-xl font-label-md text-label-md hover:bg-primary/95 hover:shadow-md transition-all cursor-pointer active:opacity-80"
                >
                    Add to Cart
                </button>
                <button className="w-full border border-secondary text-secondary py-md px-lg rounded-xl font-label-md text-label-md hover:bg-secondary-container transition-all cursor-pointer active:opacity-80">
                    Customize
                </button>
            </div>

            {/* Collapsible Meta Info (Accordions) */}
            <div className="pt-lg space-y-sm">
                {/* Dimensions & Care Accordion */}
                <div className="border-b border-outline-variant pb-2">
                    <button
                        onClick={() => setDimensionsOpen(!dimensionsOpen)}
                        className="w-full flex justify-between items-center py-3 text-left font-label-md text-label-md text-primary cursor-pointer hover:text-secondary transition-colors"
                    >
                        <span>Dimensions & Care</span>
                        <span
                            className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${dimensionsOpen ? "rotate-90" : ""
                                }`}
                        >
                            chevron_right
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-300 overflow-hidden ${dimensionsOpen ? "max-h-60 opacity-100 mt-2 mb-4" : "max-h-0 opacity-0 pointer-events-none"
                            }`}
                    >
                        <div className="font-body-md text-body-md text-on-surface-variant space-y-2 pl-1 leading-relaxed">
                            <p><strong>Overall Dimensions:</strong> 32" W x 34" D x 30" H</p>
                            <p><strong>Seat Dimensions:</strong> 24" W x 22" D x 16.5" H</p>
                            <p>
                                <strong>Care Instructions:</strong> Vacuum regularly using the upholstery attachment. Spot clean fabric with a clean, damp cloth and mild water-free solvent. Avoid placing in direct sunlight to prevent fading.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Sustainability & Craftsmanship Accordion */}
                <div className="border-b border-outline-variant pb-2">
                    <button
                        onClick={() => setSustainabilityOpen(!sustainabilityOpen)}
                        className="w-full flex justify-between items-center py-3 text-left font-label-md text-label-md text-primary cursor-pointer hover:text-secondary transition-colors"
                    >
                        <span>Sustainability & Craftsmanship</span>
                        <span
                            className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${sustainabilityOpen ? "rotate-90" : ""
                                }`}
                        >
                            chevron_right
                        </span>
                    </button>
                    <div
                        className={`transition-all duration-300 overflow-hidden ${sustainabilityOpen ? "max-h-60 opacity-100 mt-2 mb-4" : "max-h-0 opacity-0 pointer-events-none"
                            }`}
                    >
                        <div className="font-body-md text-body-md text-on-surface-variant space-y-2 pl-1 leading-relaxed">
                            <p>
                                <strong>Timber Sourcing:</strong> The solid oak frame is handcrafted using wood harvested from FSC®-certified responsibly managed forests.
                            </p>
                            <p>
                                <strong>Boucle Fabric:</strong> Made of 100% sustainable yarns, certified OEKO-TEX® Standard 100 to be free of harmful chemical finishes.
                            </p>
                            <p>
                                <strong>Artisanal Production:</strong> Each chair is individually assembled and hand-finished by master craftspeople using traditional mortise-and-tenon joinery, minimizing material waste.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
