import { useState } from 'react';
import estilos from './JurosCompostos.module.css';

export function JurosCompostos() {
    const [capital, setCapital] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [resultado, setResultado] = useState(null);

    function calcular() {
        const i = taxa / 100;
        const montante = capital * Math.pow((1 + i), tempo);
        setResultado(montante.toFixed(2)); //  converte para uma string com um número específico de casas decimais
    }

    return (
        <div className={estilos.container}>
            <form className={estilos.formulario} onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="number" 
                    placeholder="Capital Inicial (R$)" 
                    value={capital}
                    onChange={(e) => setCapital(e.target.value)} // Exibe o que o usuário digita
                />
                <input 
                    type="number" 
                    placeholder="Taxa de Juros (%)" 
                    value={taxa}
                    onChange={(e) => setTaxa(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="Tempo (meses/anos)" 
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)} 
                />
                <button type="button" onClick={calcular} className={estilos.botao}>
                    Calcular
                </button>
            </form>

            {resultado !== null && ( // se resultado não for null, o conteúdo dentro dos parênteses será exibido. span = está exibindo o texto "Total: R$" seguido do valor da variável resultado.
                <div className={estilos.resultado}>
                    <span>Total: R$ {resultado}</span>  
                </div>
            )}
        </div>
    );
}