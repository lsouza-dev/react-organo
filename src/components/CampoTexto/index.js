import './campoTexto.css'

const CampoTexto = ({valor,setValor,label,required,placeholder}) => {
    return  (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                value={valor} 
                onChange={({target}) => setValor(target.value)} 
                required={required} 
                placeholder={`${placeholder}...`} />
        </div>
    )
}

export default CampoTexto;