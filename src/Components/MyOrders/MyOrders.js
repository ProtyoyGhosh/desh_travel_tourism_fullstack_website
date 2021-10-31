import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const email = 'protyoy@gmail.com';
    const [orders, setOrders] = useState([]);
    const [isdeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isdeleted]);

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteproduct/${id}`, {
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
            <h3>Your order: {orders?.length}</h3>

            <div className="all_orders">
                <div className="row">
                    {
                        orders.map(order => (
                            <div className="col-md-6">
                                <div className="border border">
                                    <h5>{order.email}</h5>
                                    <h4>{order.name}</h4>
                                    <h5>{order.price}</h5>
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