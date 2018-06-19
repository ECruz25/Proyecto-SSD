import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.ul`
  margin-top: 30px;
  .nav-item {
    list-style-type: none;
    text-align: start;
    margin-top: 2rem;
    a {
      text-decoration: none;
      color: #858585;
    }
    .nav-item-selected {
      color: #0124a0;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <li className="nav-item">
      <NavLink exact activeClassName="nav-item-selected" to="/">
        Dashboard
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="nav-item-selected" to="/inventario">
        Inventario
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="nav-item-selected" to="/ordenes">
        Ordenes de Compra
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="nav-item-selected" to="/contratos">
        Contratos
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="nav-item-selected" to="/proveedores">
        Proveedores
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="nav-item-selected" to="/materiales">
        Materiales
      </NavLink>
    </li>
  </StyledNav>
);

export default Nav;
