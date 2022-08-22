import React, { PureComponent } from 'react'

class HEFAConsole extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'HEFAConsole'
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
      <div>HEFAConsole</div>
    )
  }
}

export default HEFAConsole