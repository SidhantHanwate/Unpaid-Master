import React, { PureComponent } from 'react'
import "../../styles/ContextPage.css"
import HomePage from './HomePage'
import WorkPage from './WorkPage'

class ContextPage extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'ContextPage',
        isInitial: true
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
      this.state.isInitial?<HomePage />:<WorkPage />
    )
  }

}

export default ContextPage