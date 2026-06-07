export default function Footer() {
    return (
        <footer className="w-full bg-surface-container-low border-t border-outline-variant">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-[1440px] mx-auto px-margin py-xl">
                <div className="col-span-1 md:col-span-1">
                    <div className="font-headline-md text-headline-md text-primary mb-md">KITCHEN CRAFT</div>
                    <p className="font-body-md text-body-md text-on-surface-variant">Curating timeless pieces for the modern home. Focused on quality, sustainability, and architectural beauty.</p>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-primary mb-md uppercase tracking-widest">Collections</h4>
                    <ul className="space-y-sm">
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Living Room</a></li>
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Dining Space</a></li>
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Bedroom Retreat</a></li>
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Office Essentials</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-primary mb-md uppercase tracking-widest">Company</h4>
                    <ul className="space-y-sm">
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Sustainability</a></li>
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Craftsmanship</a></li>
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-label-md text-label-md text-primary mb-md uppercase tracking-widest">Client Care</h4>
                    <ul className="space-y-sm">
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Shipping &amp; Returns</a></li>
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-margin py-md border-t border-outline-variant flex justify-between items-center">
                <p className="font-caption text-caption text-on-surface-variant">© 2026 KitchenCraft. Crafted for intentional living.</p>
                <div className="flex gap-md">
                    <span className="material-symbols-outlined text-primary cursor-pointer">social_leaderboard</span>
                    <span className="material-symbols-outlined text-primary cursor-pointer">photo_camera</span>
                    <span className="material-symbols-outlined text-primary cursor-pointer">share</span>
                </div>
            </div>
        </footer>
    );
}