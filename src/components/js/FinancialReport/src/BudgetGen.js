import React, { PureComponent } from 'react'

class BudgetGen extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'BudgetGen'
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
      <div>BudgetGen</div>
    )
  }
}

export default BudgetGen