import { useState } from 'react';
import estilos from './VelocidadeMedia.module.css';

export function VelocidadeMedia() {
    const [distancia, setDistancia] = useState('');
    const [tempo, setTempo] = useState('');
    const [resultado, setResultado] = useState(null);

    function calcular() {
        const d = Number(distancia);
        const t = Number(tempo);

        if (d > 0 && t > 0) {
            const velocidade = d / t;
            setResultado(velocidade.toFixed(2));
        } else {
            alert("Por favor, insira valores maiores que zero.");
        }
    }

    return (
        <div className={estilos.container}>
            <form className={estilos.formulario} onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="number" 
                    placeholder="Distância percorrida (km)" 
                    value={distancia}
                    onChange={(e) => setDistancia(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Tempo gasto (horas)" 
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)} 
                />
                <button type="button" onClick={calcular} className={estilos.botao}>
                    Calcular Velocidade
                </button>
            </form>

            {resultado !== null && (
                <div className={estilos.resultado}>
                    <span>Velocidade Média: {resultado} km/h</span>
                </div>
            )}
        </div>
    );
}