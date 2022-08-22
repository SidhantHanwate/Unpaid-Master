import React, { PureComponent } from 'react'

class LetterOfCredit extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
        name : 'LetterOfCredit'
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
      <div>LetterOfCredit</div>
    )
  }
}

export default LetterOfCredit