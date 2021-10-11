import React from 'react';

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:''
    }
  }
  handleOnChange=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  render(){
  return (
    <div>
      <input
      type="text"
      name={this.state.name}
      onChange={this.handleOnChange}
      />
      {names.filter(name =>name.toLowerCase().includes(this.state.name.toLowerCase())).map((name,index) => (
        <li key={index}>
          {name}
        </li>
      ))}
    </div>
  );
}
}

export default App;