import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  datePlusWaitTime,
  formatCurrency,
  formatDate,
} from "../../utilities/helpers";

function Order() {
  const order = useLoaderData();
  const { id, customer, cart, created_at, estimatedDelivery, orderPrice, phone, status } = order;

  // datePlusWaitTime(created_at, estimatedDelivery);

  return (
    <div className="px-3">
      <h3 className="pt-6 text-2xl font-thin text-center">Thank you, {customer}!</h3>
      <div className=" mt-10 flex justify-between items-center">
        <h3 className="text-xl font-medium">Order nr #{id} status</h3>
        {status ? (
          <p className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            Order is ready
          </p>
        ) : (
          <p className="rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            Preparing order
          </p>
        )}
      </div>
      {status ? null : (
        <p className="mt-3 font-light">
          You order will be ready at {datePlusWaitTime(created_at, estimatedDelivery)} minutes
        </p>
      )}

      <ul className="mt-10 divide-y divide-stone-200 border-b botder-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className=" bg-stone-200 mt-12 px-2 py-5 text-right">
        <p className="text-sm font-medium text-stone-600">Pay at the place</p>
        <p className="text-sm font-medium ">Price pizza: {formatCurrency(orderPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
