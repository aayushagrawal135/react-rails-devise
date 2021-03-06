import React from 'react'
import AllSecretCodes from "./all_secret_codes";
import Dropdown from "./dropdown";
import Logout from "./logout";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {secret_codes: []}

        this.handleSecretCodeGenerate = this.handleSecretCodeGenerate.bind(this);
        this.addNewSecretCodes = this.addNewSecretCodes.bind(this);
    }

    handleSecretCodeGenerate(count) {
        const csrf = document.querySelector("meta[name='csrf-token']")
            .getAttribute("content");

        fetch('/api/v1/secret_codes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrf
            },
            body: JSON.stringify({count: count})
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.addNewSecretCodes(data);
        }).catch(data => console.log("add secret code"));
    }

    addNewSecretCodes(data) {
        this.setState((state) => {
            return {secret_codes: state.secret_codes.concat(data)}
        });
    }

    componentDidMount() {
        fetch('/api/v1/secret_codes.json')
            .then((response) => {
                if (response.ok)
                    return response.json();
            })
            .catch(response=> console.log("get back here later"))
            .then((data) => {
                return this.setState((state) => {
                    return {secret_codes: data}
                })
            });
    }

    render() {
        return (
            <div className="Body">
                <Logout />
                <Dropdown handleSecretCodeGenerate={this.handleSecretCodeGenerate}/>
                <AllSecretCodes secret_codes={this.state.secret_codes} />
            </div>
        );
    }
}

export default Body