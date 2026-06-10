import { motion } from "framer-motion";

export default function Venom() {
    return (
        <section className="venom-section">
            <motion.div
                className="venom-container"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
            >
                <div className="venom-image-container">
                    <img
                        src="/src/assets/images/venom.jpeg"
                        alt="Venom"
                        className="venom-image"
                    />
                </div>

                <div className="venom-content">
                    <h2>
                        Nosso Pequeno Parceiro 🐶
                    </h2>

                    <p>
                        Nossa história não seria a mesma
                        sem ele.
                    </p>

                    <p>
                        Entre passeios, bagunças,
                        momentos engraçados e memórias
                        felizes, o Venom também se tornou
                        parte da nossa família.
                    </p>

                    <p>
                        E eu tenho certeza de que ele
                        concordaria comigo:
                    </p>

                    <blockquote>
                        Você é a melhor coisa que já
                        aconteceu na minha vida. ❤️
                    </blockquote>
                </div>
            </motion.div>
        </section>
    );
}