import React, { PureComponent } from 'react'
import "../../styles/StartPage.css"
import ContentPage from './ContentPage'
import Footer from './Footer'
import Header from './Header'

class StartPage extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: 'StartPage'
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
      <React.Fragment>
        <Header />
        <ContentPage />
        <Footer />
      </React.Fragment>
    )
  }
}

export default StartPage