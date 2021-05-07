import { connect } from 'react-redux';
import React, { Component } from 'react'
import {welcomeMessage} from '../../actions'

class Home extends Component {
    componentDidMount() {
        this.props.welcomeMessage();
    }
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {message: state.message}
}

export default connect(mapStateToProps, {welcomeMessage})(Home)