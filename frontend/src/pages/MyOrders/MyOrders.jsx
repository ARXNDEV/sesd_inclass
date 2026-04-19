import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    if (response.data.success) {
      setData(response.data.data);
    }
  };

  const trackOrder = async () => {
    await fetchOrders();
    toast.info("Your order will be delivered in 30 minutes!");
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  useEffect(() => {
    if (data.length > 0) {
      const processingOrders = data.filter(order => order.status === "Food Processing");
      
      if (processingOrders.length > 0) {
        const timer = setTimeout(() => {
          toast.success("Order Delivered Successfully!");
          
          setData(prevData => prevData.map(order => {
            if (order.status === "Food Processing") {
              return { ...order, status: "Delivered" };
            }
            return order;
          }));
        }, 15000);

        return () => clearTimeout(timer);
      }
    }
  }, [data]);
  const activeOrders = data.filter(order => order.status !== "Delivered");
  const orderHistory = data.filter(order => order.status === "Delivered");

  return (
    <div className="my-orders">
      <h2>Active Orders</h2>
      <div className="container">
        {activeOrders.length === 0 ? (
          <div className="no-orders">
            <p>You have no active orders.</p>
          </div>
        ) : (
          activeOrders.map((order, index) => {
            return (
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " X " + item.quantity;
                    } else {
                      return item.name + " X " + item.quantity + ",";
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
                <p>items: {order.items.length}</p>
                <p>
                  <span>&#x25cf;</span>
                  <b> {order.status}</b>
                </p>
                <button onClick={trackOrder}>Track Order</button>
              </div>
            );
          })
        )}
      </div>

      {orderHistory.length > 0 && (
        <div className="order-history-section">
          <h2>Order History</h2>
          <div className="container">
            {orderHistory.map((order, index) => {
              return (
                <div key={index} className="my-orders-order history-order">
                  <img src={assets.parcel_icon} alt="" />
                  <p>
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " X " + item.quantity;
                      } else {
                        return item.name + " X " + item.quantity + ",";
                      }
                    })}
                  </p>
                  <p>${order.amount}.00</p>
                  <p>items: {order.items.length}</p>
                  <p>
                    <span className="delivered-dot">&#x25cf;</span>
                    <b> {order.status}</b>
                  </p>
                  <button className="reorder-btn" onClick={() => window.location.href = "/"}>Order Again</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
