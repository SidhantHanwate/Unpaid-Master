import React, { PureComponent } from 'react'

class PayrollStaff extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'PayrollStaff'
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
      <div>PayrollStaff</div>
    )
  }
}

export default PayrollStaff