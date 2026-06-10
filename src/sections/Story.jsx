import { motion } from "framer-motion";

const chapters = [
    {
        title: "Quando Te Conheci",
        date: "Onde tudo começou ❤️",
        description:
            "Lembro de quando nossos caminhos se cruzaram pela primeira vez. Você sempre foi inteligente, dedicada e alguém que chamava atenção pelo jeito especial de ser. Naquela época eu não imaginava que você se tornaria uma das pessoas mais importantes da minha vida."
    },

    {
        title: "Nossas Primeiras Conversas",
        date: "O começo de tudo",
        description:
            "A cada conversa eu descobria um pouco mais sobre você. Aos poucos, fui admirando seu jeito, seu coração e a pessoa incrível que você é."
    },

    {
        title: "Um Momento Especial",
        date: "Com minha família ❤️",
        description:
            "Nunca vou esquecer quando você conheceu minha família. Você foi carinhosa, adorável e fez todos se sentirem à vontade. Foi um dia que guardo com muito carinho."
    },

    {
        title: "Nossa História",
        date: "Cada memória conta",
        description:
            "Entre risadas, passeios, conversas e momentos simples, construímos lembranças que sempre terão um lugar especial no meu coração."
    },

    {
        title: "Hoje",
        date: "Agora ❤️",
        description:
            "Eu amo a nossa história e tudo o que vivemos até aqui. Mas o que mais me faz feliz é saber que ainda temos muito para escrever juntos. E eu quero viver cada capítulo ao seu lado."
    }
];



export default function Story() {
    return (
        <section className="story-section">
            <h2 className="section-title">
                Capítulos da Nossa História 📖
            </h2>

            <div className="story-timeline">
                {chapters.map((chapter, index) => (
                    <motion.div
                        key={index}
                        className="story-card"
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                    >
                        <span className="story-date">
                            {chapter.date}
                        </span>

                        <h3>
                            {chapter.title}
                        </h3>

                        <p>
                            {chapter.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}