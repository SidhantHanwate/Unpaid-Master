import React, { PureComponent } from 'react'
import "../../styles/Footer.css"

class Footer extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'Footer'
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
      <div className='footer'>
        <label>Footer</label>
      </div>
    )
  }
}

export default Footer;