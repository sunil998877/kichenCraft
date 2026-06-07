import { useContext } from "react";
import { NavigationContext } from "../App";

export default function Header() {
    const { setView } = useContext(NavigationContext);

    return (
        <header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md">
            <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-margin py-md">
                <div
                    className="font-headline-md text-headline-md tracking-widest text-primary cursor-pointer"
                    onClick={() => {
                        setView('home');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    KITCHEN CRAFT
                </div>
                <div className="hidden md:flex items-center gap-lg">
                    <a className="text-primary font-semibold border-b-2 border-primary pb-1 font-label-md text-label-md transition-colors duration-300" href="#">Living</a>
                    <a className="text-on-surface-variant font-normal hover:text-primary font-label-md text-label-md transition-colors duration-300" href="#">Dining</a>
                    <a className="text-on-surface-variant font-normal hover:text-primary font-label-md text-label-md transition-colors duration-300" href="#">Bedroom</a>
                    <a className="text-on-surface-variant font-normal hover:text-primary font-label-md text-label-md transition-colors duration-300" href="#">Office</a>
                    <a className="text-on-surface-variant font-normal hover:text-primary font-label-md text-label-md transition-colors duration-300" href="#">Collections</a>
                </div>
                <div className="flex items-center gap-md">
                    <span className="material-symbols-outlined cursor-pointer text-primary">search</span>
                    <span className="material-symbols-outlined cursor-pointer text-primary">shopping_bag</span>
                    <span className="material-symbols-outlined cursor-pointer text-primary">person</span>
                </div>
            </nav>
        </header>
    );
}