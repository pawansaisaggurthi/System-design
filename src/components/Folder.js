import { useState } from "react";


function Folder({ data, handleFolder }) {

    const [showInput, setShowInput] = useState(false);
    const [isexpand, setIsExpand] = useState(false);
    const [isFolder, setIsFolder] = useState(false);

    if (!data.isFolder) {
        return (
            <div style={{ marginLeft: '20px' }}>🗒️{data.name}</div>
        )
    }

    function add(e, isFolder) {
        e.stopPropagation();
        setShowInput(true);
        setIsFolder(isFolder)
    }

    function addFolderName(inputEvent) {
            const value = inputEvent.target.value;
        if (inputEvent.key === 'Enter' && value) {
            handleFolder(data.id, value, isFolder);
            setShowInput(false);
            setIsFolder(true)
        }
    }

    return (
        <>
            <div style={{ marginLeft: '20px',cursor:'pointer',borderLeft:'1px solid black',paddingLeft:'10px' }}>
                <div  className="folder-header" onClick={() => setIsExpand(!isexpand)} style={{ display: 'inline-flex',padding:'5px' }}>
                      <span style={{marginRight:'20px'}}>📁 {data.name}</span>  
                        <button style={{marginRight:'10px'}} onClick={(e) => add(e, true)}>Folder +</button>
                        <button onClick={(e) => add(e, false)}>File +</button>
                </div>

                {showInput && (
                    <div>
                        <input autoFocus type="text" onKeyDown={addFolderName} />
                    </div>
                )}
            {isexpand && data && data.items && data.items.map((item) => <Folder handleFolder={handleFolder} key={item.id} data={item}></Folder>)}

            </div>



        </>
    )

}

export default Folder;