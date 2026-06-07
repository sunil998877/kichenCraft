import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import CompleteTheLook from "./CompleteTheLook";

export default function ProductPage() {
    return (
        <main className="max-w-[1440px] mx-auto px-margin mt-xl pb-xl">
            {/* Product Detail Section */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
                {/* Left: Image Gallery */}
                <div className="lg:col-span-7">
                    <ProductGallery />
                </div>

                {/* Right: Product Details */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <ProductInfo />
                </div>
            </section>

            {/* Complete the Look Section */}
            <CompleteTheLook />
        </main>
    );
}
