import React from 'react'

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
        this.toggleView = this.toggleView.bind(this)
    }

    toggleView() {
        this.setState((state) => {
            return ({open: !state.open})
        })
    }

    render() {
        let items = [1, 10, 20, 50, 100]
        let item_elements = items.map((item)=> {
            return (<button key={item}>{item}</button>)
        })

        let dropdown_element = this.state.open ? <div>{item_elements}</div> : null

        return (
            <div className="Dropdown">
                <button onClick={this.toggleView}>DropDown</button>
                {dropdown_element}
            </div>
        );
    }
}

export default Dropdown