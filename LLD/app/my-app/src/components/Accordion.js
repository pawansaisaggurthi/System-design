import { useState } from "react";
import AccodionItem from "./AccodionItem";

const data = [
    { title: "Accordion 1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h" },
    { title: "Accordion 2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h" },
    { title: "Accordion 3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It h" }
]

const Accordion = () => {

    const [isOpenedIndex,setOpenedIndex] = useState(0);

    return (
        <div className="w-[50%] m-auto mt-5">
            {data.map((item, index) => (<AccodionItem key={index} data={item} 
            isOpen={isOpenedIndex == index} setIsOpen={() =>{
                isOpenedIndex == index ?  setOpenedIndex(null) : setOpenedIndex(index)
            }}
            />))}
        </div>
    )
}

export default Accordion;