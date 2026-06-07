import Hero from "./Hero"
import Categories from "./Categories"
import Featured from "./Featured"
import Voices from "./Voices";
import Newsletter from "./Newsletter";
export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <Categories />
                <Featured />
                <Voices />
                <Newsletter />
            </main>

        </>
    );
}