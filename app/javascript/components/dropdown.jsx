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
            return (<li key={item}>{item}</li>)
        })

        let dropdown_element = this.state.open ? <ul>{item_elements}</ul> : <ul></ul>

        return (
            <div>
                <button onClick={() => this.toggleView()}>DropDown</button>
                {dropdown_element}
            </div>
        );
    }
}

export default Dropdown