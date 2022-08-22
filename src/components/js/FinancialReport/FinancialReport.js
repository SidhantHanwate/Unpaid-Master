import React, { PureComponent } from 'react'
import "../../styles/FinancialReport.css"

class FinancialReport extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'FinancialReport'
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
      <div>FinancialReport</div>
    )
  }
}

export default FinancialReport
