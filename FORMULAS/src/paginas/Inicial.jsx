import estilos from './Inicial.module.css'
import {JurosCompostos} from '../componentes/JurosCompostos'
import {Trigonometria} from '../componentes/Trigonometria'
import {VelocidadeMédia} from '../componentes/VelocidadeMédia'

export function Inicial() {
  return (
    <div className={estilos.container}>

      <h1 className={estilos.titulo}>Calculadoras</h1>

      <div className={estilos.componentes}>

        <div className={estilos.tabelas}>
          <h2>Juros Compostos</h2>
          <JurosCompostos />
        </div>

        <div className={estilos.tabelas}>
          <h2>Trigonometria</h2>
          <Trigonometria />
        </div>

        <div className={estilos.tabelas}>
          <h2>Velocidade Média</h2>
          <VelocidadeMédia />
        </div>

      </div>

    </div>
  )
}