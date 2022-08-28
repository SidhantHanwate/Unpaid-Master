import React, { PureComponent } from 'react'

class HostelFeeChallan extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'HostelFeeChallan'
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
      <div>HostelFeeChallan</div>
    )
  }
}

export default HostelFeeChallan