import React from 'react'
import DropdownItem from "./dropdown_item"

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false}
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({show: true}, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropDownMenu.contains(event.target)) {

            this.setState({show: false}, () => {
                document.removeEventListener('click', this.closeMenu);
            });
        }
    }

    render() {
        let items = [1, 10, 20, 50, 100]
        let item_elements = items.map((item)=> {
            return <DropdownItem item_name={item}
            handleSecretCodeGenerate={this.props.handleSecretCodeGenerate}/>
        })

        let dropdown_element = this.state.show ? <div
            className="dropdown-menu"
            ref={(element)=>{this.dropDownMenu = element;}}>
            {item_elements}
        </div> : null

        return (
            <div className="dropdown">
                <button onClick={this.showMenu}>DropDown</button>
                {dropdown_element}
            </div>
        );
    }
}

export default Dropdown