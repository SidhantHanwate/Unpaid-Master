import React, { PureComponent } from 'react'
import "../../styles/TransManagement.css"

class TransManagement extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: 'TransManagement'
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
      <div>TransManagement</div>
    )
  }
}

export default TransManagement