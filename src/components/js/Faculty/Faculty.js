import React, { PureComponent } from 'react'
import "../../styles/Faculty.css"

class Faculty extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'Faculty'
      }
    }

    static getDerivedStateFromProps(props,state){
        return null
    }
    
    componentDidMount(){}
    componentWillUnmount(){}
    componentDidUpdate(prevProp,prevState,snapshot){}
    
    getSnapshotBeforeUpdate(prevProp,prevState){
      var snapshot = {};
      return snapshot;
    }

    static getDerivedStateFromError(error){return {};}

    render() {
    return (
      <div>Faculty</div>
    )
  }
}

export default Faculty