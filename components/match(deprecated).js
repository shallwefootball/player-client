import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

import Panel from 'react-bootstrap/lib/Panel'

// import actions from '../actions'

export default class Match extends Component {

  constructor(props) {
    super(props)
  }



  render() {
    return this.props.matches.map(match => {
      return (
        <Panel header="Collapsible Group Item #1" eventKey="1">
          hihihi
        </Panel>
      )
    })
  }
}


// const mapStateToProps = (state, ownState) => {
//   return ownState
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Match)