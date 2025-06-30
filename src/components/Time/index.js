import React from 'react'
import './time.css'
import Colaborador from '../Colaborador'


const Time = ({titulo,corPrimaria,corSecundaria,colaboradores}) => {

  const css = {
            backgroundColor:corSecundaria,
            color:corPrimaria
          }

  return (
    (colaboradores.length > 0 ?
      <section 
      className='time' 
      style={css}>
        <h3 style={{borderColor: corPrimaria}} >{titulo}</h3>
        <div className='colaboradores'>
            {colaboradores.map(c => <Colaborador key={c.nome} corDeFundo={corPrimaria} nome={c.nome} cargo={c.cargo} imagem={c.imagem} />)}
        </div>
    </section>
    : '')
  )
}

export default Time