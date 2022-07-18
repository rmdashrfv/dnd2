import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return(
      <div>
        <h1>Hello React class</h1>
        <h2>Count is {this.state.count}</h2>
        <button onClick={() => {
          this.setState({count: this.state.count+1})
        }}>CLICK ME</button>
      </div>
    )
  }
}

export default App;