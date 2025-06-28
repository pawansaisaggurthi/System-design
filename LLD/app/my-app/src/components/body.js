import { useEffect, useState } from 'react';
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';


const Body = () => {

    const [memes, setMemes] = useState([])


    useEffect(() => {
        fetchMemes()
    }, [])

    const fetchMemes = async () => {
        const data = await fetch('https://meme-api.com/gimme/20')
        const memes = await data.json();
        setMemes(memes.memes)
    }

    return (
        <div className='flex flex-wrap'>
            {memes.length === 0 ? <Shimmer /> : memes.map((meme, i) => (
                <MemeCard key={i} data={meme} />
            ))}
        </div>
    )

}

export default Body;