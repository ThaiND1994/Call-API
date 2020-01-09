import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
const Menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lý Sản Phẩm',
        to: '/products',
        exact: false
    }
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        var active = match ? 'active' : '';
        return (
            <li className={active}>
                <Link to={to}>
                    {label}
                </Link>
            </li>
        )
    }} />

}
class Menu extends Component {
    showMenu = (menus) => {
        var result = null;
        if (Menus.length > 0) {
            result = menus.map((menu, index) => {
                return (<MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />);
            })
        }
        return result;
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="# ">Call API</a>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            {this.showMenu(Menus)}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Menu;
