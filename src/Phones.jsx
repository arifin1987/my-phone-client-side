import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Phones = () => {

    const phones = useLoaderData()
    return (
        <div>
            <h2>All Phones are here{phones.length}</h2>
            {
                phones.map(phone => <li key={phone.id}>
                    <Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
            }
        </div>
    );
};

export default Phones;