import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Hero() {
    const scrollToContent = () => {
        document
            .getElementById("love-letter")
            .scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <section
            className="hero"
            style={{
                backgroundImage:
                    "url('/src/assets/images/hero-bg.jpg')",
            }}
        >
            <div className="hero-overlay"></div>

            <motion.div
                className="hero-content"
                initial={{
                    opacity: 0,
                    y: 80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1.4,
                }}
            >
                <FaHeart className="hero-heart" />

                <span className="hero-small">
                    Este presente foi feito para uma única pessoa ❤️
                </span>

                <h1 className="hero-name">
                    Laysla
                </h1>

                <h2 className="hero-title">
                    Feliz Dia dos Namorados
                </h2>

                <p className="hero-subtitle">
                    Você transformou os meus dias
                    em algo muito mais bonito.
                </p>

                <button
                    className="hero-button"
                    onClick={scrollToContent}
                >
                    Abrir Meu Coração
                </button>
            </motion.div>
        </section>
    );
}