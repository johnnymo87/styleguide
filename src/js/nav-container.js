import React from 'react';
import localLinks from 'local-links';

let D = React.DOM;

export default React.createClass({
  displayName: 'NavContainer',

  componentDidMount() {
    this.makeActiveLink();
  },

  componentDidUpdate() {
    this.makeActiveLink();
  },

  makeActiveLink() {
    let self = this;
    let pathname = window.location.pathname;
    let navItems = self.refs.navList.getDOMNode().querySelectorAll('.nav-item');

    for(let i = 0; i < navItems.length; i++) {
      let link = navItems.item(i).children.item(0);

      if(localLinks.active(link, pathname)) {
        navItems.item(i).classList.add('is-active');
      } else {
        navItems.item(i).classList.remove('is-active');
      }
    }
  },

  handleClick(e) {
    let pathname = localLinks.getLocalPathname(e);

    if(pathname){
      e.preventDefault();
      window.router.history.navigate(pathname, {trigger: true});
    } else {
      return false;
    }
  },

  render() {
    let self = this;

    return D.div({
      className: 'main',
      onClick: self.handleClick
    }, [
      D.nav({
        className: 'nav nav-primary',
        role: 'navigation'
      }, [
        D.ul({
          className: 'nav-list',
          ref: 'navList'
        }, [
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/' }, 'Home')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/base' }, 'Base Styles')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/nav' }, 'Navigation')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/tables' }, 'Tables + Lists')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/forms' }, 'Forms')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/buttons' }, 'Buttons')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/popovers' }, 'Popovers')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/modals' }, 'Modals')),
          D.li({className: "nav-item"}, D.a({ className: "nav-link", href: '/cards' }, 'Cards'))
        ])
      ]),
      D.section({
        className: 'content-container'
      }, self.props.children)
    ]);
  }
});
