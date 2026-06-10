import { motion } from "framer-motion";

export default function LoveLetter() {
    return (
        <section
            id="love-letter"
            className="love-letter-section"
        >
            <motion.div
                className="love-letter-card"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
            >
                <h2 className="love-letter-title">
                    Para Você, Laysla ❤️
                </h2>

                <div className="love-letter-content">
                    <p>
                        Você é a pessoa mais especial da minha vida.
                    </p>

                    <p>
                        Quero que você saiba que eu te amo
                        mais do que qualquer palavra seria
                        capaz de expressar.
                    </p>

                    <p>
                        Prometo estar ao seu lado
                        em todos os momentos.
                    </p>

                    <p>
                        Nos dias bons e nos dias difíceis.

                        Nas alegrias e nas tristezas.

                        Nas vitórias e nos desafios.
                    </p>

                    <p>
                        Independentemente do que a vida
                        nos reserve, quero enfrentar tudo
                        ao seu lado.
                    </p>

                    <p>
                        Este presente que você está vendo
                        hoje não representa nem uma pequena
                        parte de tudo o que ainda quero viver
                        e construir com você.
                    </p>

                    <p>
                        Dos sonhos que quero realizar.

                        Dos lugares que quero conhecer.

                        Das memórias que ainda quero criar.
                    </p>

                    <p>
                        Obrigado por ser minha companheira.

                        Meu porto seguro.

                        Minha melhor amiga.

                        E o amor da minha vida.
                    </p>

                    <p>
                        Eu te amo hoje.

                        Amanhã.

                        E para sempre.
                    </p>
                </div>

                <div className="love-letter-signature">
                    Com amor,
                    <br />
                    Pedro ❤️
                </div>
            </motion.div>
        </section>
    );
}