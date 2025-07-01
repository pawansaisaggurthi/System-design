import { useState, useEffect } from "react";

const ImageSlider = () => {

    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            nextImage()
        }, 4000);

        return () => clearInterval(t)

    }, [])

    const images = [
        "https://www.taylorleisure.co.uk/media/2323/carousel-04.jpg",
        "https://www.marinmommies.com/sites/default/files/stories/howarth-park-carousel.jpg",
        "https://eskipaper.com/images/carousel-1.jpg",
        "https://c2.staticflickr.com/4/3040/2977849554_6b2e307eee_b.jpg"
    ]

    const prevImage = () => {
        setActive((active) => active <= 0 ? images.length - 1 : active - 1)
    }

    const nextImage = () => {
        console.log(images.length - 1)
        console.log(active)
        setActive((active) => images.length - 1 == active ? 0 : active + 1)
    }

    return (
        <div className="m-auto justify-center items-center flex mt-4">
            <img className="w-[300px] h-[200px] rounded-r-lg" alt="img1" onClick={() => prevImage()} src={images[active == 0 ? images.length - 1 : active - 1]} />
            <img className="w-[600px] h-[200px] mx-2 rounded-lg" alt="img2" src={images[active]} />
            <img className="w-[300px]  h-[200px] rounded-l-lg" alt="img3" onClick={() => nextImage()} src={images[active == images.length - 1 ? 0 : active + 1]} />
        </div>
    )
}

export default ImageSlider;