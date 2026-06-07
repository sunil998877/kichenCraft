import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setStatus("success");
            setEmail("");
        }
    };

    return (
        <section className="py-xl mb-xl">
            <div className="max-w-[1440px] mx-auto px-margin">
                <div className="bg-primary py-lg px-md md:py-xl md:px-margin rounded-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden">
                    {status === "idle" ? (
                        <>
                            <div className="text-center md:text-left">
                                <h2 className="font-headline-lg text-headline-lg text-on-primary">Join the Aura Circle</h2>
                                <p className="font-body-md text-body-md text-on-primary-container mt-xs max-w-[28rem]">
                                    Receive exclusive collection early-access and interior design insights delivered to your inbox.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full md:w-auto gap-sm items-stretch sm:items-center">
                                <input
                                    className="bg-transparent border border-on-primary-container/60 text-on-primary placeholder:text-on-primary-container focus:outline-none focus:ring-1 focus:ring-on-primary focus:border-on-primary w-full md:w-80 px-md h-[56px] rounded-xl transition-all duration-300"
                                    placeholder="Your email address"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-on-primary text-primary px-lg h-[56px] rounded-xl font-label-md text-label-md hover:bg-on-primary/90 transition-all duration-300 cursor-pointer active:scale-95 whitespace-nowrap flex items-center justify-center w-full sm:w-auto"
                                >
                                    Join
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="w-full text-center py-md flex flex-col items-center justify-center gap-xs animate-fade-in">
                            <span className="material-symbols-outlined text-on-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                check_circle
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-on-primary mt-2">Welcome to the Circle</h2>
                            <p className="font-body-md text-body-md text-on-primary-container max-w-[28rem]">
                                Thank you for subscribing. You've been successfully added to our inner circle.
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-md text-on-primary hover:text-on-primary-container text-sm font-label-md underline cursor-pointer"
                            >
                                Register another email
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
