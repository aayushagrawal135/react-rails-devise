import React from 'react'

class SecretCode extends React.Component {

    render() {
        return (
            <div key={this.props.secret_code.code}>
                {this.props.secret_code.email &&
                    <span>{this.props.secret_code.email}</span>}
                {" - "}
                <span>{this.props.secret_code.code}</span>
            </div>
        );
    }
}

export default SecretCode