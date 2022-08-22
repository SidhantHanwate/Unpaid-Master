import React, { PureComponent } from 'react'

class EMDReport extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'EMDReport'
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
      <div>EMDReport</div>
    )
  }
}

export default EMDReport