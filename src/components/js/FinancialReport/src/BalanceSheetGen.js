import React, { PureComponent } from 'react'

class BalanceSheetGen extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'BalanceSheetGen'
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
      <div>BalanceSheetGen</div>
    )
  }
}

export default BalanceSheetGen