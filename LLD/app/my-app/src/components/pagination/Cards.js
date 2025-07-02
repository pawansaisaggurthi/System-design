

const Cards = ({ thumbnail, title, brand, description, price, id }) => {
    return (
        <div className="border p-4 m-4 border-black w-60">
            <div>
                <img className="w-60 object-contain" alt={id} src={thumbnail} />
                <div>
                    <p className="font-bold">{id}-{title}</p>
                    <p>{brand}</p>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;