import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';
import AddItem from './AddItem/AddItem';
class App extends Component {
state = {
  items:[
    {id:1,name:'sabri',age:25},
    {id:2,name:'ali',age:23},
    {id:3,name:'atef',age:24}

  ]
}
deleteItem = (id) => {
  let items = this.state.items.filter(it => {
    return it.id !== id
  });
  // let index = items.findIndex(it => it.id === id)
  // items.splice(index,1);
this.setState({
     items:items
  })
  
}
addItem = (item) =>{
  item.id = Math.random()
let items = this.state.items;
items.push(item)
this.setState({items:items})
}


 render() {
    return (
      <div className = "App container">
     <h2 className = "text-center">Todo List</h2> 
      <TodoItem items = {this.state.items} deleteItem = {this.deleteItem}/>
      <AddItem addItem = {this.addItem}/>

      </div>
    );
  }
}

export default App;
