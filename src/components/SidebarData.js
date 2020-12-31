import React from 'react';
import * as FaIcons from 'react-icons/fa';

/* the square brackets are for creating an array*/
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaPoo/>,
        cName: 'nav-text'
    },
    {
        title: 'Item',
        path: '/item',
        icon: <FaIcons.FaProjectDiagram/>,
        cName: 'nav-text'
    },
    {
        title: 'Items',
        path: '/items',
        icon: <FaIcons.FaAirFreshener/>,
        cName: 'nav-text'
    },
    {
        title: 'Test',
        path: '/test',
        icon: < FaIcons.FaAdobe/>,
        cName: 'nav-text'
    }
]