import React, { PureComponent } from 'react'

class HostelCheckIn extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'HostelCheckIn'
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
      <div>HostelCheckIn</div>
    )
  }
}

export default HostelCheckIn