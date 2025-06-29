import { useEffect, useState } from 'react';
import MemeCard from './MemeCard';
import Shimmer from './Shimmer';


const Body = () => {

    const [memes, setMemes] = useState([]);

    const [showShimmer, setShowShimmer] = useState(false)

    useEffect(() => {
        fetchMemes();

        window.addEventListener("scroll", handleScrollEvent);

        return ()  => window.removeEventListener("scroll", handleScrollEvent)
    }, [])

    const handleScrollEvent = () => {

        // { we have did -1 in document.body.scrollheight body height 6393 and scrollevent height 6392.0666}

        // "The 0.666 difference is due to sub-pixel rendering and floating-point math — scroll position can be fractional, but scrollHeight is usually rounded."


        if (window.scrollY + window.innerHeight >= document.body.scrollHeight-1) {
            fetchMemes();
        }
    }

    const fetchMemes = async () => {
        setShowShimmer(true)
        const data = await fetch('https://meme-api.com/gimme/20')
        const meme = await data.json();
        setShowShimmer(false)
        setMemes((memes) => [...memes, ...meme.memes])
    }

    return (
        <div className='flex flex-wrap'>
            {memes.map((meme, i) => (
                <MemeCard key={i} data={meme} />
            ))}

            {showShimmer && <Shimmer />}
        </div>
    )

}

export default Body;