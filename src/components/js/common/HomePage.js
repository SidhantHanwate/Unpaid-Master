import React, { PureComponent } from 'react'
import "../../styles/HomePage.css"

class HomePage extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'HomePage'
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
      <div>
        <label>HomePage</label>
      </div>
    )
  }

}

export default HomePage