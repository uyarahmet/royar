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
    <div style={{float: 'left', position: 'relative', top: '8.50px', left: '15px'}}>
      <Menu secondary >
       <Menu.Item
         name='alert'
         active={activeItem === 'editorials'}
         onClick={this.handleItemClick}
         >
         Create Alert
        </Menu.Item>
       </Menu>
      </div>
    );
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  preventClosing = e => e.stopPropagation();
}

export default function FilterSection(){
  return (
    <div><More/><BedsAndBaths/><Price/><Alert/></div>
  )
}
