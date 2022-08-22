import React, { PureComponent } from 'react'
import "../../styles/LoginPage.css"
import CredentialPage from './CredentialPage'


class LoginPage extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: 'LoginPage',
      isCredentialRequested: false,
      isStudentRequest:true
    }

    this.onFacultyCredentialPageClicked = this.onFacultyCredentialPageClicked.bind(this);
    this.onStudentCredentialPageClicked = this.onStudentCredentialPageClicked.bind(this);
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

  onStudentCredentialPageClicked = event => {
    console.log("Student Credential Page Requested")
    this.setState({
      isCredentialRequested: true,
      isStudentRequest:true
    })
  }

  onFacultyCredentialPageClicked = event => {
    console.log("Faculty Credential Page Requested")
    this.setState({
      isCredentialRequested: true,
      isStudentRequest:false
    })
  }

  render() {

    const loginPage = (
      <div className='page'>
        <div className='header'>
          <img className='logo' />
          <label className='headlabel' />
        </div>
        <div className='actions'>
          <button className='action' onClick={this.onStudentCredentialPageClicked}>Student</button>
          <button className='action' onClick={this.onFacultyCredentialPageClicked}>Faculty/Staff</button>
        </div>
      </div>
    )

    return (
      this.state.isCredentialRequested ? <CredentialPage isStudent={this.state.isStudentRequest} /> : loginPage
    )
  }
}

export default LoginPage