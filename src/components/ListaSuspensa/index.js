import './listaSuspensa.css'

const ListaSuspensa = ({ valor, setValor, required, label, itens }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                required={required}
                onChange={({ target }) => setValor(target.value)}
                value={valor}
            >
                <option value="">Selecione um time</option>
                {itens.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa
