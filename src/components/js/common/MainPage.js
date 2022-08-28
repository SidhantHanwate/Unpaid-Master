import React, { PureComponent } from 'react'
import "../../styles/MainPage.css"
import LoginPage from './LoginPage'
import StartPage from './StartPage'

class MainPage extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'MainPage',
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
        this.state.isLoginPageRequested?<LoginPage />:<StartPage />
    )
  }
}

export default MainPage