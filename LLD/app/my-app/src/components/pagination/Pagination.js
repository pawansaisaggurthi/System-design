import { useState, useEffect } from "react";
import Cards from "./Cards";
import Shimmer from "../Shimmer";

const LIMIT = 20;

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [noOfPages, setNoOfPages] = useState([]);
    const [total, setTotal] = useState(0);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, [offset])

    const fetchProducts = async () => {
        setShowLoading(true)
        const data = await fetch(`https://dummyjson.com/products/?limit=${LIMIT}&skip=${offset}`)
        const json = await data.json();
        setShowLoading(false)
        setProducts(json.products);
        setTotal(json.products);
        const total = json.total
        const cal = total % LIMIT === 0 ? total / LIMIT : Math.floor(total / LIMIT + 1)
        setNoOfPages(cal)
    }

    function prevPage(){
     setOffset(offset - LIMIT)
     }

     function nextPage(){
     setOffset(offset + LIMIT)
     }

    if(showLoading) return <Shimmer/>

    return (
        <div>
            <div className="flex flex-wrap">
                {products && products.map((product, index) => (
                    <Cards key={index} {...product} />))
                }
            </div>

            <footer className="flex justify-between w-[50%] m-auto text-center cursor-pointer my-10">
                <div onClick={offset <= 0? null: () => prevPage()}>Prev</div>
                {[...Array(noOfPages).keys()].map((val, index) => <div className={val*LIMIT == offset? 'font-bold':''} onClick={() => setOffset(val*LIMIT)}  key={index}>{val + 1}</div>)}
                <div  onClick={(offset+ LIMIT) >= total?null : () => nextPage()}>Next</div>
            </footer>
        </div>
    )
}

export default Pagination;