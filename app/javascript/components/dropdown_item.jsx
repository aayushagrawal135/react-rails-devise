import React from 'react'

class DropdownItem extends React.Component {
    render() {
        return(
            (<button key={this.props.item_name}
            onClick={() => this.props.handleSecretCodeGenerate(this.props.item_name)}>
                {this.props.item_name}</button>)
        );
    }
}

export default DropdownItem