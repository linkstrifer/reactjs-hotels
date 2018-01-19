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
    const { renderContent, toggle } = this;
    const { label, children: content } = this.props;
    const { open: isOpen } = this.state;

    return (
      <div
      className="filter-box"
      onClick={toggle}
      >
        <span className={`filter-box-title ${!isOpen ? 'is-closed' : ''}`}>
          {label}
        </span>
        <div className={`filter-box-toggle ${!isOpen ? 'is-closed' : ''}`}>
          <div className="filter-box-content">
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default AccordionComponent;
