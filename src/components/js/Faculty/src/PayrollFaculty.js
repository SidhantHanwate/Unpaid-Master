import React, { PureComponent } from 'react'

class PayrollFaculty extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'PayrollFaculty'
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
      <div>PayrollFaculty</div>
    )
  }
}

export default PayrollFaculty