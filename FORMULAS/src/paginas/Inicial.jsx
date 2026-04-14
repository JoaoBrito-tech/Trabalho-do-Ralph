import estilos from './Inicial.module.css';
import { JurosCompostos } from '../componentes/JurosCompostos';
import { Calorimetria } from '../componentes/Calorimetria';
import { VelocidadeMedia } from '../componentes/VelocidadeMedia'; 

export function Inicial() {
  return (
    <div className={estilos.container}>
      <h1 className={estilos.titulo}>Calculadoras</h1>
      <p className={estilos.subtitulo}>João Paulo - 2 DS A</p>

      <div className={estilos.componentes}>
        
        <div className={estilos.tabelas}>
          <h2>Juros Compostos</h2>
          <JurosCompostos />
        </div>

        <div className={estilos.tabelas}>
          <h2>Calorimetria</h2>
          <Calorimetria />
        </div>

        <div className={estilos.tabelas}>
          <h2>Velocidade Média</h2>
          <VelocidadeMedia /> 
        </div>

      </div>
    </div>
  );
}