import React, { Component } from 'react'

export class TestApi extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         response : ''
      }
      this.callApi = this.callApi.bind(this)
    }

    callApi(){
        fetch("http://localhost:4000/testapi").then(response=>response.text()).then((response)=>
        {
            this.setState({response:response})
        })
    }

    componentDidMount(){
        this.callApi()
    }

  render() {
    return (
      <div>TestApi Result : {this.state.response}</div>
    )
  }
}

export default TestApi