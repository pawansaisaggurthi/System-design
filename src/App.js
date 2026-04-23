import explorer from './data/folderData';
import Folder from './components/Folder'
import { useState } from 'react';
import { produce } from 'immer';
function App() {

  const [tree, setTree] = useState(explorer);

  function insesrtNode(node, id, name, isFolder) {
    if (node.id === id) {
      return {
        ...node, items: [...node.items, { id: Date.now(), name: name, isFolder: isFolder, items: [] }]
      }
    }

    return {
      ...node, items: node.items.map((item) => insertNode(item, id, name, isFolder))
    }
  }

  //using immer
  function insertNode(tree, id, name, isFolder) {
    return produce(tree, (draft) => {

      const traverse = (node) => {
        if(node.id === id){
          node.items.push({
            id:Date.now(),
            name,
            isFolder,
            items:[]
          });
          return
        }
        node.items.forEach(traverse)
      }
     traverse(draft)
    })
  }

  function handleFolder(id, name, isFolder) {
    setTree((prev) => insertNode(prev, id, name, isFolder))
  }

  return (
    <>
      <Folder data={tree} handleFolder={handleFolder}></Folder>
    </>
  )
}


export default App;