import {useState} from 'react';
import './App.css';
import Item from './Item';

function App() {
  const [items, setItems] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const input = form.item;
    const newItems = [...items, input.value]
    setItems(newItems)
    form.reset();
  }

  function handleDelete(itemRemoved) {
    const newItems = items.filter((item) => {
      return item !== itemRemoved
    })
    setItems(newItems)
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div className='shopping-list'>
        <h3>Items:</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text" 
            name="item"
            placeholder='add a new item'
            required
          />
          <button> Add</button>
        </form>
        <ul>
          {items.map((item, index) => 
            <Item item={item} key={item + index} handleDelete={handleDelete}/>
            )}
        </ul>
      </div>
    </div>
  );
}

export default App;
