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
            setResultado(velocidade.toFixed(2)); //  converte para uma string com um número específico de casas decimais
        } else {
            alert("Por favor, insira valores maiores que zero.");
        }
    }

    return (
        <div className={estilos.container}>
            <p className={estilos.descricao}>
                A velocidade média relaciona a distância percorrida com o tempo gasto em um trajeto. A fórmula V = d / t indica o quão rápido um corpo se desloca, considerando o percurso total e o tempo total.
            </p>

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
                    Calcular
                </button>
            </form>

            {resultado !== null && ( // se resultado não for null, o conteúdo dentro dos parênteses será exibido. 
                <div className={estilos.resultado}>
                    <span>Velocidade Média: {resultado} km/h</span>
                </div>
            )}
        </div>
    );
}