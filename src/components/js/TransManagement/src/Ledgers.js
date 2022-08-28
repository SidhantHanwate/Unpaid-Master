import React, { PureComponent } from 'react'

class Ledgers extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'Ledgers'
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
      <div>Ledgers</div>
    )
  }
}

export default Ledgers