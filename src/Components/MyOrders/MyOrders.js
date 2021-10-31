import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const email = 'protyoy@gmail.com';
    const [orders, setOrders] = useState([]);
    const [isdeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch(`https://creepy-zombie-41639.herokuapp.com/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isdeleted]);

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://creepy-zombie-41639.herokuapp.com/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    setIsDeleted(true)
                }
                else {
                    setIsDeleted(false)
                }
            })
    }
    return (
        <div>
            <h3 className="text-success m-2">Your order: {orders?.length}</h3>

            <div className="all_orders">
                <div className="row">
                    {
                        orders.map(order => (
                            <div className="col-md-6">
                                <div className="">
                                    <img style={{ width: '200px', height: '150px' }} src={order.img} alt="" />
                                    <h6 style={{ marginTop: '20px', color: 'green', fontSize: '22px', fontWeight: '700' }}>{order.name}</h6>
                                    <p style={{ fontSize: '12px', padding: '10px', color: 'black', fontWeight: '600' }}>{order.desc}</p>
                                    <h5 style={{ paddingBottom: '10px', color: 'orangered' }}>${order.price}  USD</h5>
                                    <button onClick={() => handleDelete(order._id)} className='btn btn-danger m-2'>Cancel Order</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyOrders;