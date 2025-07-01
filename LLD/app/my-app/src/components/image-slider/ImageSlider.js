import { useState, useEffect } from "react";

const ImageSlider = () => {

    const [active, setActive] = useState(0);

    useEffect(()=>{

       const t = setInterval(() => {
            nextImage()
        }, 3000);

        return () => clearInterval(t)

    },[])

    const images = [
        "https://www.taylorleisure.co.uk/media/2323/carousel-04.jpg",
        "https://www.marinmommies.com/sites/default/files/stories/howarth-park-carousel.jpg",
        "https://eskipaper.com/images/carousel-1.jpg",
        "https://c2.staticflickr.com/4/3040/2977849554_6b2e307eee_b.jpg"
    ]

    const prevImage =() =>{
        setActive((active) => active <= 0 ?images.length-1:active-1)
    }

    const nextImage =() =>{
        console.log(images.length-1)
        console.log(active)
        setActive((active) => images.length-1 == active ? 0:active+1)
    }

    return (
        <div className="m-auto justify-center w-[60%] items-center flex">
            {active}
            <img className="w-[60px] h-[60px] cursor-pointer" onClick={() => prevImage()} alt="img" src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-left-arrow-vector-icon-white-transparent-background-png-image_5249044.jpg" />
            <img className="w-[800px] h-[400px]" alt="img" src={images[active]} />
            <img className="w-[60px] h-[60px] cursor-pointer" alt="img" onClick={() => nextImage()} src="https://i.pinimg.com/736x/b2/3f/2d/b23f2daa45ffa5bc088fa4fb38ed5581.jpg" />
        </div>
    )
}

export default ImageSlider;