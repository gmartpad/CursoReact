import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <>
            <div>Página Inicial</div>
            <Link to="/about">SOBRE</Link>
        </>
    );
}

export default Page;