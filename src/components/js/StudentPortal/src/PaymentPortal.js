import React, { PureComponent } from 'react'

class PaymentPortal extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'PaymentPortal'
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
      <div>PaymentPortal</div>
    )
  }
}

export default PaymentPortal