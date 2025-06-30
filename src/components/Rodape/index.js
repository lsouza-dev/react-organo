import './rodape.css'

const Rodape = () => {
    return <footer>
        <div className='redes_sociais'>
            <ul>
                <li><img src='/imagens/fb.png' alt='Logo Facebook'/></li>
                <li><img src='/imagens/tw.png' alt='Logo Twitter'/></li>
                <li><img src='/imagens/ig.png' alt='Logo Instagram'/></li>
            </ul>
        </div>
        <div className='logo'>
            <img src='/imagens/logo.png' alt='Logo organo'/>
        </div>
        <div>
            Desenvolvido por Alura.
        </div>
    </footer>
}

export default Rodape;