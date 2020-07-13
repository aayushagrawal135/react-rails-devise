import React from 'react'
import SecretCode from "./secret_code";

class AllSecretCodes extends React.Component {
    render() {

        let secret_codes = this.props.secret_codes ?
            this.props.secret_codes.map((secret_code) =>
            <SecretCode secret_code={secret_code}/>) : null

        return(
            <div className="SecretCodes">
                {secret_codes}
            </div>
        )
    }
}

export default AllSecretCodes