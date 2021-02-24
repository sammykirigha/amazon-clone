import React, {useEffect, useState} from 'react';
import { db } from '../../firebase';
import { useStateValue } from '../../stateProvider/StateProvider';
import Order from './Order';
import './Orders.css';
import { Link } from 'react-router-dom';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'decs')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([]);
        }
        
    }, [user])

    return (
        <div className='orders'>
            <h1>Your Order</h1>
            <p>Your Order cant be handled at the moment, to go back <Link to="/">Click this link</Link></p>
            <div className="orders__order">
                {
                    orders.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>
        </div>
    )
}

export default Orders
