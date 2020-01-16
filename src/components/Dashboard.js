import React, { Component } from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const config = {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        }
        axios.get('http://localhost:3001/users/me', config)
            .then((response) => {
                console.log(response);
                this.setState({
                    user: response.data
                })
            }).catch((err) => console.log(err.response));
    }
    render() {
        return (
            <Container>
                <h1>Welcome, {this.state.user.firstName}</h1>
            </Container>
        )
    }
}
