import { useState } from 'react';
import estilos from './Calorimetria.module.css';

export function Calorimetria() {
    const [massa, setMassa] = useState('');
    const [calorEspecifico, setCalorEspecifico] = useState('');
    const [tempInicial, setTempInicial] = useState('');
    const [tempFinal, setTempFinal] = useState('');
    const [resultado, setResultado] = useState(null);

    function calcular() {
        const m = Number(massa);
        const c = Number(calorEspecifico);
        const ti = Number(tempInicial);
        const tf = Number(tempFinal);

        if (m > 0 && c > 0 && tf > ti) {
            const deltaT = tf - ti;
            const Q = m * c * deltaT;
            setResultado(Q.toFixed(2)); //  converte para uma string com um número específico de casas decimais
        } else {
            alert("Por favor, insira valores válidos.");
        }
    }

    return (
        <div className={estilos.container}>
            <p className={estilos.descricao}>
                A calorimetria estuda as trocas de calor entre corpos. A fórmula Q = m · c · ΔT calcula a quantidade de calor necessária para variar a temperatura de uma substância, considerando sua massa, calor específico e a diferença entre a temperatura inicial e final.
            </p>
            <form className={estilos.formulario} onSubmit={(e) => e.preventDefault()}>
                <input
                    type="number"
                    placeholder="Massa (kg)"
                    value={massa}
                    onChange={(e) => setMassa(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Calor específico (J/kg·K)"
                    value={calorEspecifico}
                    onChange={(e) => setCalorEspecifico(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Temperatura inicial (°C)"
                    value={tempInicial}
                    onChange={(e) => setTempInicial(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Temperatura final (°C)"
                    value={tempFinal}
                    onChange={(e) => setTempFinal(e.target.value)}
                />
                <button type="button" onClick={calcular} className={estilos.botao}>
                    Calcular
                </button>
            </form>

            {resultado !== null && ( // se resultado não for null, o conteúdo dentro dos parênteses será exibido.
                <div className={estilos.resultado}>
                    <span>Quantidade de Calor: {resultado} J</span>
                </div>
            )}
        </div>
    );
}
