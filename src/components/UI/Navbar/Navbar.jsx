import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const loguot = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className='navbar'>
            <MyButton onClick={loguot}>Выйти</MyButton>
            <div className="navbar__links">
                <Link to='/about'>О нас</Link>
                <Link to='/posts'>Посты</Link>
            </div>
        </div>
    );
};

export default Navbar;