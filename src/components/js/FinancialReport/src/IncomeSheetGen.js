import React, { PureComponent } from 'react'

class IncomeSheetGen extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'IncomeSheetGen'
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
      <div>IncomeSheetGen</div>
    )
  }
}

export default IncomeSheetGen