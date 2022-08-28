import React, { PureComponent } from 'react'

class PayrollAdHocStaff extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'PayrollAdHocStaff'
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
      <div>PayrollAdHocStaff</div>
    )
  }
}

export default PayrollAdHocStaff