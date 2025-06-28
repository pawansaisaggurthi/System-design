


const MemeCard = ({ data }) => {

    const { url, title } = data

    return (
        <div className="p-4 m-4 border border-black rounded-lg">
            <img className="w-64 h-64" alt="meme" src={url} />
            <p>{title}</p>
        </div>
    )
}


export default MemeCard;