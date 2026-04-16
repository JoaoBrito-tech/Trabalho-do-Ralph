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

            {resultado !== null && ( // se resultado não for null, o conteúdo dentro dos parênteses será exibido. span = está exibindo o texto "Total: R$" seguido do valor da variável resultado.
                <div className={estilos.resultado}>
                    <span>Velocidade Média: {resultado} km/h</span>
                </div>
            )}
        </div>
    );
}