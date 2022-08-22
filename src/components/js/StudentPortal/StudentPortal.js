import React, { PureComponent } from 'react'
import "../../styles/StudentPortal.css"

class StudentPortal extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'StudentPortal'
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
      <div>StudentPortal</div>
    )
  }
}

export default StudentPortal