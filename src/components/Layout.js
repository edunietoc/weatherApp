import React from 'react';
import Menu from './Menu';
import SearchBar from './SearchBar';
import './styles/Layout.css';


const Layout = (props) => {
    const { children } = props;

    return(

        <div className='Layout'>
            <Menu/>
            <main>
            <SearchBar/>
                {children}
            </main>
        </div>

    );

}

export default Layout;