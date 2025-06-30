import React from 'react'
import './colaborador.css'
const Colaborador = ({corDeFundo,nome,imagem,cargo}) => {
    return <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={`Foto de perfil github do(a) ${nome}`}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
}

export default Colaborador