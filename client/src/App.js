import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PurchaseOrders from './components/PurchaseOrder/PurchaseOrders';
import PurchaseOrders2 from './components/PurchaseOrder/PurchaseOrders2';
import PurchaseOrders3 from './components/PurchaseOrder/PurchaseOrders3';
import ProductList from './components/Product/ProductList';
import InvoiceList from './components/Invoice/InvoiceList';
import SupplierList from './components/SupplierList';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const App = () => (
  <Router>
    <StyledApp className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/inventario" component={ProductList} />
        <Route path="/proveedores" component={SupplierList} />
        <Route path="/ordenes/planeacion" component={PurchaseOrders} />
        <Route path="/ordenes/abiertas" component={PurchaseOrders2} />
        <Route path="/ordenes/vencidas" component={PurchaseOrders3} />
        <Route path="/facturas" component={InvoiceList} />
      </Switch>
    </StyledApp>
  </Router>
);

export default App;
