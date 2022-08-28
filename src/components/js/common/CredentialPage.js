import React, { PureComponent } from 'react'
import "../../styles/CredentialPage.css"

import IITLogo from "../../../icons/IITLogo.png"
import { CheckCredentialsValidity,UserNameValidator,PasswordValidator } from "../../utilities/utilityFuncs"

class CredentialPage extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            name: 'CredentialPage',
            isStudent: true,
            username: '',
            password: ''
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

    onCredentialSubmitAction = event => {
        console.log("Credential Submit Action");
        const res = CheckCredentialsValidity(this.state.username, this.state.password, this.state.isStudent);

        if (res) { console.log("Login Successful") }
        else {
            console.log("Login Failure")
        }
    }

    onUsernameChange = event => {

        console.log("UserName Changed , also including validation")
        const usrname = event.target.value;
      //  document.getElementById('validatorInfo').appendChild(document.createTextNode(UserNameValidator(usrname)))

        this.setState({
            username: usrname
        }
        )
    }
    


    onPasswordChange = event => {

        console.log("Password Changed , also including validation")
        const passwrd = event.target.value;
       // document.getElementById('validatorInfo').appendChild(document.createTextNode(PasswordValidator(passwrd)))

        this.setState({
            password: passwrd
        }
        )
    }

    render() {
        return (
            <div className='page'>
                <div className='header'>
                    <div className='logo'><img alt='Sorry not available' height='50' width='70' src={IITLogo} /></div>
                    <div className='headlabel'><label>LoginPortal</label></div>
                </div>
                <div className='actions'>
                    <form onSubmit={this.onCredentialSubmitAction}>
                        <div className='get'>
                            <div className='label'><label>UserName</label></div>
                            <div className='entryblk'><input className='entry' type='text' onChange={this.onUsernameChange} /></div>
                            <div className='validatorInfo' id='validatorInfo'></div>
                        </div>
                        <div className='get'>
                            <div className='label'><label>Password</label></div>
                            <div className='entryblk'><input className='entry' type='text' onChange={this.onPasswordChange} /></div>
                            <div className='validatorInfo' id='validatorInfo'></div>
                        </div>
                        <div className='submit'>
                            <input type='submit' value='Submit' className='submitbtn'/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CredentialPage