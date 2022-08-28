import React, { PureComponent } from 'react'
import "../../styles/AccountSettings.css"

class AccountSettings extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'AccountSettings'
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
      <div>AccountSettings</div>
    )
  }
}

export default AccountSettings