import React from "react"
import PropTypes from "prop-types"
import {createStructuredSelector} from "reselect";

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'

function getThings() {
  console.log('getThings action!!')
  return {
    type: GET_THINGS_REQUEST
  }
}

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => getThings()}>get things</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things()
})

const mapDispatchToProps = { getThings }

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
