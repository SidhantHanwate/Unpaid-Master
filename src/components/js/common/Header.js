import React, { PureComponent } from 'react'
import "../../styles/Header.css"

import IITLogo from "../../../icons/IITLogo.png"
import ProfilePic from "../../../icons/profilePic.jpg"

class Header extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Header'
    }
  }

  static getDerivedStateFromProps(props, state) {
    return null
  }

  componentDidMount() { }
  componentWillUnmount() { }
  componentDidUpdate(prevProp, prevState, snapshot) { }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    var snapshot = {};
    return snapshot;
  }

  static getDerivedStateFromError(error) { return {}; }

  render() {
    return (
      <div className='header'  id='home'>
        
        <div className='logo-side'>
          <a href='#home' className='ahead'>
            <img className='main-logo' src={IITLogo} width='70' height='50' alt='Sorry not available'/>
          </a>
          <label className='label-name'>Indian Institue of Technology Tirupati</label>
        </div>

        <div className='profile-side'>
          <a href='#home' className='ahead' >
            <img className='profile' width='50' height='50' src={ProfilePic} alt='Sorry not available' />
          </a>
        </div>

      </div>
    )
  }
}



export default Header