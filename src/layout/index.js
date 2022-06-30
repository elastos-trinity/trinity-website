import React from 'react';
import Navbar from '../components/Navbar';
import Aux from '../hoc/Aux_';

const Layout = (props) => {
  	return (
        <Aux>
            {/* Navbar Component*/}
            <Navbar />
            {props.children}
        </Aux>
  	);
}

export default Layout;