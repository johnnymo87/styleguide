import React from 'react';

export default React.createClass({

  displayName: "Modal",

  getInitialState() {
    return {
      isOpen: this.props.isOpen || false
    }
  },

  getDefaultProps() {
    return {
      zIndex: 1000,
      contentColumns: 9
    }
  },

  clickBackground() {
    this.props.closeModal()
  },

  modalContentClasses() {
    var classes = [
      'modal-content',
      'mx-auto',
      'bg-white',
      'p4',
      'rounded-3',
      'relative',
      'float-none'
    ];

    classes.push('col-'+this.props.contentColumns);

    return classes.join(' ');

  },

  render() {
    if(!this.props.isOpen) {
      return <div />
    }
    else {
      return <div ref="modal" style={{zIndex: this.props.zIndex}} className="anim-fade ease-out modal-background top-0 bottom-0 left-0 right-0 fixed flex flex-center" onClick={this.clickBackground}>
          <div className="container">
            <div className={this.modalContentClasses()}>
              {this.props.children}
            </div>
          </div>
        </div>
      }

  }

});
