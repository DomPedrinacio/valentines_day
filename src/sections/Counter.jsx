import { useEffect, useState } from "react";

export default function Counter() {

    const startDate = new Date("2024-11-05");

    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {

        const interval = setInterval(() => {

            const diff = new Date() - startDate;

            const days = Math.floor(
                diff / (1000 * 60 * 60 * 24)
            );

            const hours = Math.floor(
                (diff / (1000 * 60 * 60)) % 24
            );

            const minutes = Math.floor(
                (diff / (1000 * 60)) % 60
            );

            const seconds = Math.floor(
                (diff / 1000) % 60
            );

            setTime({
                days,
                hours,
                minutes,
                seconds,
            });

        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section className="counter-section">
            <h2 className="section-title">
                Desde 05 de Novembro de 2024 ❤️
            </h2>

            <p className="section-subtitle">
                Cada segundo ao seu lado vale a pena.
            </p>

            <div className="counter-grid">

                <div className="counter-card">
                    <span>{time.days}</span>
                    <small>Dias</small>
                </div>

                <div className="counter-card">
                    <span>{time.hours}</span>
                    <small>Horas</small>
                </div>

                <div className="counter-card">
                    <span>{time.minutes}</span>
                    <small>Minutos</small>
                </div>

                <div className="counter-card">
                    <span>{time.seconds}</span>
                    <small>Segundos</small>
                </div>

            </div>
        </section>
    );
}