const reasons = [
    "Seu sorriso",
    "Seu abraço",
    "Seu carinho",
    "Sua companhia",
    "Sua força",
    "Sua personalidade",
    "Sua risada",
    "Seu apoio",
    "Seu coração",
    "Seu jeito único",
    "O jeito que você cuida de mim",
    "O jeito que você ama o Venom",
];

export default function Reasons() {
    return (
        <section className="reasons-section">

            <h2 className="section-title">
                Motivos Pelos Quais Eu Te Amo ❤️
            </h2>

            <div className="reasons-grid">

                {reasons.map((reason, index) => (

                    <div
                        key={index}
                        className="reason-card"
                    >
                        ❤️ {reason}
                    </div>

                ))}

            </div>

        </section>
    );
}