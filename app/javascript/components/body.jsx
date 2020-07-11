import React from 'react'
import AllSecretCodes from "./all_secret_codes";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {secret_codes: []}
    }

    componentDidMount() {
        fetch('/api/v1/secret_codes.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return this.setState((state) => {
                    return {secret_codes: data}
                })
            });
    }

    render() {
        console.log(this.state.secret_codes)
        return (
            <AllSecretCodes secret_codes={this.state.secret_codes} />
        );
    }
}

export default Body