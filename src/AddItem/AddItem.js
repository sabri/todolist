import React from 'react';
import './AddItem.css';

class AddItem extends React.Component {
  state = {
    name : '',
    age : ''
  }
  handlechange = (e) => this.setState({[e.target.id]:e.target.value}) 
  submit = (e) => {
    e.preventDefault()
    if (e.target.name.value=='')
     {return false}
     else {

      this.props.addItem(this.state)
      this.setState({
        name:'',
        age:''
      })
     } 

  
  }
 
  render = () => (
    <div>
      <form onSubmit = {this.submit}>
        <input type="text" placeholder="enter your name.." id="name" onChange={this.handlechange} value={this.state.name}/>
        <input type="number" placeholder="enter your age.." id="age" onChange={this.handlechange} value={this.state.age}/>
         <input type="submit" value="Add Todo"/>
      </form>
    </div>
  )
}

export default AddItem;
