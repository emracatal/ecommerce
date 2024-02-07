import React, { useEffect, useState } from "react";
import HomeHeader from "./HeaderHome";
import axiosWithAuth from "../api/axiosWithAuth";

export default function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosWithAuth().get("/order");
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <HomeHeader />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-2 mobile:flex mobile:flex-col mobile:py-2 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2">
            <h3>Order List</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center mobile:flex-col gap-4 ">
        <div className="container flex flex-col pr-2 pt-2 max-w-[1050px] mobile:p-0">
          <div className="flex">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Order no
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Order date
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="3">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="3">Error: {error}</td>
                  </tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id}>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {order.id}
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {order.order_date.slice(0, -9)}
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        {order.price}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

//https://tailwindcomponents.com/component/list-order-product component used..
