import './CardProduto.css'

export default function CardProduto(props) {
    return (
        <div className="card">
            <img
                src={props.dishes.img}
                className="imagem"
                alt={props.dishes.nome}
            />
            <div className='text'>
                <p>{props.dishes.descricao}</p>
                <p className='valor'>$ {props.dishes.valor}</p>
            </div>
        </div>
    )
}