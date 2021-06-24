import { useState } from "react";
import "./App.css";

function App() {
  const [inText, setInText] = useState("");
  const [itemList, setItemList] = useState([]);
  const [editItem, setEditItem] = useState(null);

  function onAddList() {
    if (!inText) {
      console.log("digite algo");
    } else {
      if (editItem) {
        setItemList(
          itemList.map((item) => {
            if (item.id === editItem.id) {
              return { id: editItem.id, inText };
            }
            return item;
          })
        );
        setEditItem(null);
      } else {
        setItemList([...itemList, { id: itemList.length + 1, inText }]);
      }
      setInText("");
    }
  }

  function onRemove(item) {
    console.log(item);
    setItemList(itemList.filter((nameItem) => nameItem !== item));
  }

  function onEdit(item) {
    setInText(item.name);
    setEditItem(item);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div className="App-header">
        <input value={inText} onChange={(e) => setInText(e.target.value)} />
        <button onClick={onAddList} style={{ marginLeft: 20 }}>
          Adicionar
        </button>
        <br />
        <ul>
          {itemList?.length ? (
            itemList.map((item) => (
              <span key={item.id}>
                <li className="li">
                  {item.inText}{" "}
                  <button onClick={() => onRemove(item)}>Remover</button>{" "}
                  <button onClick={() => onEdit(item)}>Editar</button>
                </li>
              </span>
            ))
          ) : (
            <p>Lista vázia</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
