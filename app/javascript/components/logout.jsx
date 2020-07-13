import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {logged_in: false};
        this.handleLoginState = this.handleLoginState.bind(this);
    }

    componentDidMount() {
        fetch('/api/v1/secret_codes/is_signed_in')
            .then((response) => response.json())
            .catch(response => console.log("Error in logout"))
            .then((data) => {
                return this.handleLoginState(data);
            })
    }

    handleLoginState(data) {
        this.setState({logged_in: data});
    }

    render() {
        return(
            this.state.logged_in ?
            <div className={"Logout"}>
                <a href={'/api/v1/secret_codes/delete'}>Logout</a>
            </div>
            :
            <div className={"LogIn"}>
                <a href={'/users/sign_in'}>Login</a>
            </div>
        );
    }
}

export default Logout