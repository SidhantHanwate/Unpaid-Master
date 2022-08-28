import React, { PureComponent } from 'react'

class StudentFeeManagement
 extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'StudentFeeManagement'
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
      <div>StudentFeeManagement

      </div>
    )
  }
}

export default StudentFeeManagement
