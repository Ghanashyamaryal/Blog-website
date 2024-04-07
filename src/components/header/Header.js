import React from 'react';
import Logo from "../logo"
import Container from "../container/container"
import LogoutBtn from "./LogoutBtn"
import { useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItem = [{
        name: 'Home', url: "/",
        active: true
    },
    {
        name: "Login",
        url: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        url: "/signup",
        active: !authStatus,
    },
    {
        name: "All Posts",
        url: "/all-posts",
        active: authStatus,
    },
    {
        name: "Add Post",
        url: "/add-post",
        active: authStatus,
    },]

    return (
        <header>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to="/">
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItem.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                        onClick={() => navigate(item.url)}
                                    >{item.name}
                                    </button>
                                    </li>
                            ) : null
                        )}
                        {authStatus&&(
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;
