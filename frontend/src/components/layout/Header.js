import React from 'react'
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

export default function Header() {
    return (
        <header id="header">
            <Link to="/">
                <h2 className="title" >Authentication</h2>
            </Link>
            <AuthOptions />
        </header>
    )
}
