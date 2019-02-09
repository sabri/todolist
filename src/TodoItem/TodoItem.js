import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
 const {items, deleteItem } = props;
 let length = items.length;
 const list = length ? (items.map(item => {
return(
  <div key = {item.id}>
<span className="name">{item.name}</span>
<span className="age">{item.age}</span>
<span onClick = {() => deleteItem (item.id)} className="action icon">&times;</span>

 </div>
)

 })) : (<p>no Item more</p>)
return (
  <div className="listItem">
    <div>
    <span className = "name title">Name</span>
    <span className="age title">Age</span>
    <span className = "action title">Action</span>

    </div>
    {list}
  </div>
);
 }



export default TodoItem;
