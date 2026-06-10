import { useState } from "react";
import { motion } from "framer-motion";

export default function Surprise() {

    const [opened, setOpened] = useState(false);

    return (
        <section className="surprise-section">

            <h2 className="section-title">
                Uma Pequena Surpresa 🎁
            </h2>

            {!opened && (

                <button
                    className="surprise-button"
                    onClick={() => setOpened(true)}
                >
                    Clique Aqui ❤️
                </button>

            )}

            {opened && (

                <motion.div
                    className="surprise-card"
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                >

                    <h3>
                        ❤️
                    </h3>

                    <p>
                        Talvez você pense que este site
                        é o seu presente.
                    </p>

                    <p>
                        Mas a verdade é que ele é apenas
                        uma pequena parte dele.
                    </p>

                    <p>
                        Porque o que eu preparei para você
                        está muito mais perto do que imagina.
                    </p>

                    <p>
                        E eu mal posso esperar para ver
                        o seu sorriso quando descobrir.
                    </p>

                </motion.div>

            )}

        </section>
    );
}