import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

export default function Universes() {
    const sectionRef = useRef(null);

    // ✅ estrelas geradas UMA vez (sem flicker)
    const stars = useMemo(() => {
        return Array.from({ length: 150 }, () => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            delay: Math.random() * 12,
            duration: 4 + Math.random() * 6,
        }));
    }, []);

    // ✅ scroll progress correto
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const darkness = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, 0.4, 1, 0.6, 0]
    );

    const starsOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [0, 0.3, 1, 0.5, 0]
    );

    return (
        <section ref={sectionRef} className="universes-section">

            {/* 🌑 overlay de escurecimento */}
            <motion.div
                className="space-darkness"
                style={{ opacity: darkness }}
            />

            {/* 🌠 estrelas / meteoros */}
            <motion.div
                className="meteor-field"
                style={{ opacity: starsOpacity }}
            >
                {stars.map((star, i) => (
                    <span
                        key={i}
                        className="meteor"
                        style={{
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            animationDelay: `${star.delay}s`,
                            animationDuration: `${star.duration}s`,
                        }}
                    />
                ))}
            </motion.div>

            {/* 💌 card principal */}
            <motion.div
                className="universes-card"
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.4 }}
            >
                <span className="universes-tag">
                    🌌 Em todos os universos
                </span>

                <h2>Eu ainda escolheria você.</h2>

                <p>Entre infinitas possibilidades.</p>
                <p>Entre bilhões de pessoas.</p>
                <p>Entre todas as versões possíveis da realidade.</p>
                <p>Eu ainda escolheria você.</p>
                <p>Hoje.</p>
                <p>Amanhã.</p>
                <p>E em todas as vidas possíveis.</p>

                <motion.div
                    className="portal"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    ❤️
                </motion.div>
            </motion.div>

        </section>
    );
}