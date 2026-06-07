export default function Voices() {
    return (
        <section className="py-xl max-w-[1440px] mx-auto px-margin">
            <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-xl">Voices of Ethereal Living</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Testimonial 1 */}
                <div className="bg-surface p-lg rounded-xl soft-organic-shadow border border-surface-container">
                    <div className="flex gap-1 mb-md">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <p className="font-body-md text-body-md text-primary italic mb-lg">
                        "The Arc Chair is more than just furniture; it's a piece of sculpture in my living room. The craftsmanship is evident in every curve."
                    </p>
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-label-md text-primary font-medium">
                            ER
                        </div>
                        <div>
                            <p className="font-label-md text-label-md text-primary">Elena Rodriguez</p>
                            <p className="font-caption text-caption text-on-surface-variant">Architect</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-surface p-lg rounded-xl soft-organic-shadow border border-surface-container">
                    <div className="flex gap-1 mb-md">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <p className="font-body-md text-body-md text-primary italic mb-lg">
                        "Incredible attention to detail. The shipping was seamless, and the sofa is even more beautiful in person than in the photography."
                    </p>
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-label-md text-primary font-medium">
                            JT
                        </div>
                        <div>
                            <p className="font-label-md text-label-md text-primary">Julian Thorne</p>
                            <p className="font-caption text-caption text-on-surface-variant">Interior Designer</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-surface p-lg rounded-xl soft-organic-shadow border border-surface-container">
                    <div className="flex gap-1 mb-md">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                    <p className="font-body-md text-body-md text-primary italic mb-lg">
                        "I appreciate the sustainable materials. It feels good to invest in pieces that are built to last a lifetime, both in quality and style."
                    </p>
                    <div className="flex items-center gap-md">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-label-md text-primary font-medium">
                            SC
                        </div>
                        <div>
                            <p className="font-label-md text-label-md text-primary">Sarah Chen</p>
                            <p className="font-caption text-caption text-on-surface-variant">Creative Director</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
