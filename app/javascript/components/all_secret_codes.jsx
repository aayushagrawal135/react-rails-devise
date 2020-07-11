import React from 'react'
import SecretCode from "./secret_code";

class AllSecretCodes extends React.Component {
    render() {
        return(
            <div className="SecretCodes">
                {this.props.secret_codes.map((secret_code) => <SecretCode secret_code={secret_code}/>)}
            </div>
        )
    }
}

export default AllSecretCodes