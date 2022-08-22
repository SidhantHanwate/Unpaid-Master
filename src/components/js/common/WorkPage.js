import React, { PureComponent } from 'react'
import "../../styles/WorkPage.css"

class WorkPage extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'WorkPage',
        isLoginPageRequested:false
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
        <div className='page'>
          <label>WorkPage</label>
        </div>
    )
  }
}

export default WorkPage