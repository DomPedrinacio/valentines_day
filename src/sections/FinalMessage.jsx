import { motion } from "framer-motion";

export default function FinalMessage() {
    return (
        <section className="final-section">

            <motion.div
                className="final-card"
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
            >

                <h2 className="final-title">
                    Feliz Dia dos Namorados ❤️
                </h2>

                <p className="final-text">
                    Não importa para onde a vida nos leve.
                </p>

                <p className="final-text">
                    Não importa quais desafios apareçam.
                </p>

                <p className="final-text">
                    Não importa quantos anos passem.
                </p>

                <p className="final-text">
                    Eu sempre vou escolher você.
                </p>

                <p className="final-text">
                    Todos os dias.
                </p>

                <p className="final-text">
                    Em todas as versões da nossa história.
                </p>

                <div className="final-heart">
                    ❤️
                </div>

                <div className="final-signature">
                    Para sempre seu,
                    <br />
                    Pedro
                </div>

                <div className="venom-approval">
                    🐶 Venom aprova esta mensagem.
                </div>

            </motion.div>
        </section>
    );
}