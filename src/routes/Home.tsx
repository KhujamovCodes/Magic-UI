import AnimatedGridPattern from "@/components/ui/animated-grid-pattern.js";
import WordFadeIn from "@/components/ui/word-fade-in.js";

const Home = () => {
    return (
        <div>
            <AnimatedGridPattern/>
            <WordFadeIn words={ "Salom bu magic ui" }/>
        </div>
    );
}

export default Home;
