import estilos from './JurosCompostos.module.css'
import {useState} from 'react'

export function JurosCompostos(){
   const [capital,setCapital] = useState(0);
   const [taxa,setTaxa] = useState(0);
   const [tempo,setTempo] = useState(0);
   const [resultado,setResultado] = useState(null);


function calcular() {
   const i = taxa / 100;
   const montante = capital * math.pow((1 + i), tempo);
   setResultado(montante.toFixed(2)); //  converte para uma string com um número específico de casas decimais
}

    return(
        <div className={estilos.container}>
            <form className={estilos.formulario} onSubmit={(e) => e.preventDefault()}>
            </form>

       





        </div>
    )
}