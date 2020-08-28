import React from 'react';
import { Link } from 'react-router-dom'

import { HeaderArea } from './styled';

const Header = () => {
    return (
        <HeaderArea>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li className="noUpper">
                    <Link to="/apis">APIs</Link>
                </li>
            </ul>
        </HeaderArea>
    );
}

export default Header;