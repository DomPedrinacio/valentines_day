import foto1 from "../assets/images/cafeteria.jpeg";
import foto2 from "../assets/images/cineminha.jpeg";
import foto3 from "../assets/images/clubelala.jpeg";
import foto4 from "../assets/images/festa1.jpeg";
import foto5 from '../assets/images/festajunina.jpeg';
import foto6 from '../assets/images/natal.jpeg';
import { motion } from "framer-motion";

const photos = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
];

export default function Gallery() {
    return (
        <section className="gallery-section">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h2 className="section-title">
                    Nossas Memórias ❤️
                </h2>

                <p className="section-subtitle">
                    Cada foto guarda um momento que eu
                    viveria mil vezes novamente.
                </p>

                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <div
                            className="gallery-item"
                            key={index}
                        >
                            <img
                                src={photo}
                                alt=""
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}