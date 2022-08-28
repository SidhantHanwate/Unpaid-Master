import React, { PureComponent } from 'react'
import "../../styles/TopNavBar.css"
import { } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDropbox } from '@fortawesome/free-brands-svg-icons'

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdownSP");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }

    myDropdown = document.getElementById("myDropdownFR");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
    
    myDropdown = document.getElementById("myDropdownTM");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }

    myDropdown = document.getElementById("myDropdownFF");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

class TopNavBar extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: 'TopNavBar',
      isOpenSP:false,
      isOpenFR:false,
      isOpenTM:false,
      isOpenFF:false
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

  onDropdownClickedStudentPortal = (_event) => {
    document.getElementById("myDropdownSP").classList.toggle("show");
  }
  onDropdownClickedFinancialReport = (_event) => {
    document.getElementById("myDropdownFR").classList.toggle("show");
  }
  onDropdownClickedTransactionManagement = (_event) => {
    document.getElementById("myDropdownTM").classList.toggle("show");
  }
  onDropdownClickedFaculty = (_event) => {
    document.getElementById("myDropdownFF").classList.toggle("show");
  }
  

  render() {
    return (
      <div className='navbar'>

        <div className='dropdown'>
          <button className='dropbtn' onClick={this.onDropdownClickedStudentPortal}>
            StudentsPortal
            <FontAwesomeIcon icon={faDropbox} className='nav-icon'/>
          </button>
          <div className='dropdown-content' id='myDropdownSP'>
            <button className='dropdown-but'>HostelFeeChallan</button>
            <button className='dropdown-but'>HostelCheckOut</button>
            <button className='dropdown-but'>HostelCheckIn</button>
            <button className='dropdown-but'>Payment</button>
            <button className='dropdown-but'>FeeManagement</button>
          </div>
        </div>


        <div className='dropdown'>
          <button className='dropbtn' onClick={this.onDropdownClickedFinancialReport}>
            FinancialReport
            <FontAwesomeIcon icon={faDropbox} className='nav-icon'/>
          </button>
          <div className='dropdown-content' id='myDropdownFR'>
            <button className='dropdown-but'>BalanceSheet</button>
            <button className='dropdown-but'>IncomeSheet</button>
            <button className='dropdown-but'>Budget</button>
          </div>
        </div>


        <div className='dropdown'>
          <button className='dropbtn' onClick={this.onDropdownClickedTransactionManagement}>
            TransactionManagement
            <FontAwesomeIcon icon={faDropbox} className='nav-icon'/>
          </button>
          <div className='dropdown-content' id='myDropdownTM'>
            <button className='dropdown-but'>Ledgers</button>
            <button className='dropdown-but'>MISReports</button>
            <button className='dropdown-but'>HEFA-Request</button>
            <button className='dropdown-but'>LetterOfCredit</button>
            <button className='dropdown-but'>EMD</button>
          </div>
        </div>


        <div className='dropdown'>
          <button className='dropbtn' onClick={this.onDropdownClickedFaculty}>
            Payroll
            <FontAwesomeIcon icon={faDropbox} className='nav-icon'/>
          </button>
          <div className='dropdown-content' id='myDropdownFF'>
            <button className='dropdown-but'>Faculty</button>
            <button className='dropdown-but'>Staff</button>
            <button className='dropdown-but'>AdHoc-Staff</button>
          </div>
        </div>

      </div>
    )
  }

}

export default TopNavBar