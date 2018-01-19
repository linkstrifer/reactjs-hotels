import React, { Component } from 'react';

class AccordionComponent extends Component {
  state = {
    open: true,
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const { toggle } = this;
    const { label, children: content } = this.props;
    const { open: isOpen } = this.state;

    return (
      <div
      className="filter-box"
      >
        <span
          className={`filter-box-title ${!isOpen ? 'is-closed' : ''}`}
          onClick={toggle}          
        >
          {label}
        </span>
        <div className={`filter-box-toggle ${!isOpen ? 'is-closed' : ''}`}>
          {content}
        </div>
      </div>
    )
  }
}

export default AccordionComponent;
