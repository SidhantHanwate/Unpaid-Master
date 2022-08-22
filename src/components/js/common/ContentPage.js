import React, { PureComponent } from 'react'
import "../../styles/ContentPage.css"
import ContextPage from './ContextPage'
import TopNavBar from './TopNavBar'

class ContentPage extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: 'ContentPage'
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
        <TopNavBar />
        <ContextPage />
      </React.Fragment>
    )
  }

}

export default ContentPage