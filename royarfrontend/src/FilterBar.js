import React, { Component } from "react";
import { Menu, Dropdown, Input, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

export class Price extends Component {
  state = { isOpen: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    <div style={{float: 'left'}}>
      <Menu secondary >
       <Menu.Item>
        <Dropdown
          text={"Price"}
          className="item"
          onClick={this.toggleOpen}
          open={this.state.isOpen}
        >
          <Dropdown.Menu onClick={this.preventClosing}>
            <Dropdown.Header icon="money" content={" Price Range"} />
            <Dropdown.Divider />
            <form
              style = {{margin: '10px'}}
              name="id"
              type="number"
              max={900}
              action={<Button onClick={this.toggleOpen} content={"Send"} />}
            >
            <Input style={{zoom: '0.9'}} placeholder="min"/>&nbsp;—&nbsp;<Input style={{zoom: '0.9'}} placeholder="max"/>
            </form>
          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
       </Menu>
      </div>
    );
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  preventClosing = e => e.stopPropagation();
}

export class BedsAndBaths extends Component {
  state = { isOpen: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    <div style={{float: 'left'}}>
      <Menu secondary>
       <Menu.Item>
        <Dropdown
          text={"Bedrooms & Livingrooms"}
          className="item"
          onClick={this.toggleOpen}
          open={this.state.isOpen}
        >
          <Dropdown.Menu onClick={this.preventClosing}>
            <form
              style = {{margin: '10px'}}
              name="id"
              type="number"
              max={900}
              action={<Button onClick={this.toggleOpen} content={"Send"} />}
            >
            <Input style={{zoom: '0.9'}} placeholder="3"/>&nbsp;+&nbsp;<Input style={{zoom: '0.9'}} placeholder="1"/>
            </form>
          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
       </Menu>
      </div>
    );
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  preventClosing = e => e.stopPropagation();
}

export class More extends Component {
  state = { isOpen: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    <div style={{float: 'left'}}>
      <Menu secondary>
       <Menu.Item>
        <Dropdown
          text={"More"}
          className="item"
          onClick={this.toggleOpen}
          open={this.state.isOpen}
        >
          <Dropdown.Menu onClick={this.preventClosing}>
            <Dropdown.Header icon="money" content={" Price Range"} />
            <Dropdown.Divider />
            <form
              style = {{margin: '10px'}}
              name="id"
              type="number"
              max={900}
              action={<Button onClick={this.toggleOpen} content={"Send"} />}
            >
            <Input style={{zoom: '0.9'}} placeholder="min"/>&nbsp;—&nbsp;<Input style={{zoom: '0.9'}} placeholder="max"/>
            </form>
          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
       </Menu>
      </div>
    );
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  preventClosing = e => e.stopPropagation();
}

export class Alert extends Component {
  state = { isOpen: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    <div style={{float: 'left', position: 'relative', top: '11.5px', left: '15px', zoom: '0.9'}}>
      <Menu secondary >
      <button class="ui button ">
        Create Alert
      </button>
       </Menu>
      </div>
    );
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  preventClosing = e => e.stopPropagation();
}

export class Search extends Component {
  state = { isOpen: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    <div style={{float: 'left', position: 'relative', top: '12px', right: '50px', zoom: '0.9'}}>
        <Menu secondary >
        <div style={{float: 'left', position: 'relative', right: '10px'}} class="ui input focus">
          <input type="text" placeholder="Enter an adress, neigborhood, city, or ZIP code
" size="45"/>
        </div>
        <button class="ui button ">
          Search
        </button>
       </Menu>
      </div>
    );
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  preventClosing = e => e.stopPropagation();
}


export default function FilterSection(){
  return (
    <div style={{position: 'relative', left: '75px', bottom: '1px'}}><Search/><div style={{position: 'relative', right: '30px'}}><More/><BedsAndBaths/><Price/><Alert/></div></div>
  )
}
