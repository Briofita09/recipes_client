import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import "material-icons/iconfont/material-icons.css";

import { Link } from 'react-router-dom';

export default function NavigationMenu() {
    return (
        <Menu menuButton={<MenuButton><span className='material-icons-round'>menu</span></MenuButton>} transition>
            <Link to="/" style={{ textDecoration: "none" }}><MenuItem>Home</MenuItem></Link>
            <Link to="/all-recipes" style={{ textDecoration: "none" }}><MenuItem>Todas as receitas</MenuItem></Link>
            <MenuItem>Quem sou eu</MenuItem>
        </Menu>
    );
}