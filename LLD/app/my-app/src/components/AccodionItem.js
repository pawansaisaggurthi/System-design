const AccodionItem = ({ data, isOpen, setIsOpen }) => {

    const { title, description } = data;

    return (
        <div className="border border-black">
            <div className="flex justify-between font-bold bg-slate-200 p-2 cursor-pointer"
                onClick={() => setIsOpen()}   >
                <span>{title}</span>
                <span>🔃</span>
            </div>
            {isOpen && <div>{description}</div>}
        </div>
    )
}

export default AccodionItem;