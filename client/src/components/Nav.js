import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

// const StyledNav = styled.ul`
//   margin-top: 30px;
//   .nav-item {
//     list-style-type: none;
//     text-align: start;
//     margin-top: 2rem;
//     a {
//       text-decoration: none;
//       color: #858585;
//     }
//     .nav-item-selected {
//       color: #0124a0;
//     }
//   }
// `;

class Nav extends Component {
  state = { open: true };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <List component="div">
        <NavLink style={{ textDecoration: 'none' }} exact activeClassName="nav-item-selected" to="/">
          <ListItem button>
            <ListItemText inset primary="Dashboard" />
          </ListItem>
        </NavLink>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="nav-item-selected" to="/inventario">
          <ListItem button>
            <ListItemText inset primary="Inventario" />
          </ListItem>
        </NavLink>
        <ListItem button onClick={this.handleClick}>
          <ListItemText inset primary="Ordenes de Compra" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button style={{ paddingLeft: '50px' }}>
              <NavLink style={{ textDecoration: 'none' }} activeClassName="nav-item-selected" to="/ordenes/planeacion">
                <ListItemText inset primary="Planeacion" />
              </NavLink>
            </ListItem>
            <ListItem button style={{ paddingLeft: '50px' }}>
              <NavLink style={{ textDecoration: 'none' }} activeClassName="nav-item-selected" to="/ordenes/abiertas">
                <ListItemText inset primary="Abiertas" />
              </NavLink>
            </ListItem>
            <ListItem button style={{ paddingLeft: '50px' }}>
              <NavLink style={{ textDecoration: 'none' }} activeClassName="nav-item-selected" to="/ordenes/vencidas">
                <ListItemText inset primary="Vencidas" />
              </NavLink>
            </ListItem>
          </List>
        </Collapse>
        <NavLink style={{ textDecoration: 'none' }} activeClassName="nav-item-selected" to="/proveedores">
          <ListItem button>
            <ListItemText inset primary="Proveedores" />
          </ListItem>
        </NavLink>
        {/* <NavLink style={{ textDecoration: 'none' }} activeClassName="nav-item-selected" to="/facturas">
          <ListItem button>
            <ListItemText inset primary="Facturas" />
          </ListItem>
        </NavLink> */}
      </List>
    );
  }
}

export default Nav;
