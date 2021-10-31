import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(result => setPackages(result))
    }, []);

    const handleOrder = index => {
        const order = packages[index];
        order.email = 'protyoy@gmail.com';

        fetch('http://localhost:5000/addorder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order),
        });
    }

    return (
        <div>
            <h1 className='pt-5' style={{ color: 'green', fontSize: '45px', fontWeight: '700' }}>Our packages</h1>
            <div className="package-container mt-3">
                <div className="packages">
                    <div className="row">
                        {
                            packages.map((item, index) => (
                                <div className="col-md-6 mt-5 p-3 ">
                                    <img style={{ width: '400px', height: '250px' }} src={item.img} alt="" />
                                    <h6 style={{ marginTop: '20px', color: 'green', fontSize: '22px', fontWeight: '700' }}>{item.name}</h6>
                                    <p style={{ fontSize: '12px', padding: '10px', color: 'black', fontWeight: '600' }}>{item.desc}</p>
                                    <h5 style={{ paddingBottom: '10px', color: 'orangered' }}>${item.price}  USD</h5>
                                    <Link to='/myorders'><button onClick={() => handleOrder(index)} className='btn btn-success'>Book Now</button></Link>

                                </div>
                            ))
                        }
                        <h3 className='mt-5' style={{ color: 'green', fontSize: '35px', fontWeight: '700' }}>Want to add some more Packages?</h3>
                        <Link to='/addpackages'><strong>Please click here</strong></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;