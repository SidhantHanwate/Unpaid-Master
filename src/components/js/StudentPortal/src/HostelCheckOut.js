import React, { PureComponent } from 'react'

class HostelCheckOut extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'HostelCheckOut'
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
      <div>HostelCheckOut</div>
    )
  }
}

export default HostelCheckOut