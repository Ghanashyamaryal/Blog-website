import React from 'react';
import authservice from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const Logoutbtn = () => {
    const dispatch = useDispatch();
    const logouthandler = () => {
        authservice.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
            Logout
        </button>
    );
}

export default Logoutbtn;
