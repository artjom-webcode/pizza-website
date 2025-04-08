import { Form, redirect, useNavigation } from "react-router-dom";
import { formatCurrency } from "../../utilities/helpers";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { createOrder } from "../../services/apiRestaurant";
import store from "../../store";
import { IoCallOutline, IoPencil, IoPersonOutline, IoReaderOutline } from "react-icons/io5";

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-3 mt-4 pb-7">
      <h2 className="font-thin text-2xl ">Ready to order</h2>
      <Form method="POST" action="/order/new">
        <div className=" relative">
          <IoPersonOutline className="absolute top-1/2 left-3 translate-y-[-50%] z-10" />

          <input
            placeholder="Your name"
            className=" border w-full p-3 pl-9 font-thin my-4 rounded border-gray-400 placeholder:text-gray-400 placeholder:font-thin focus:outline-none focus:ring focus:ring-gray-200"
            type="text"
            name="customer"
            required
          />
        </div>

        <div className="relative">
          <IoCallOutline className="absolute top-1/2 left-3 translate-y-[-50%] z-10" />

          <input
            pattern="[0-9]+"
            required
            placeholder="Your phone"
            className=" border w-full p-3 pl-9 font-thin my-4 rounded border-gray-400 placeholder:text-gray-400 placeholder:font-thin focus:outline-none focus:ring focus:ring-gray-200"
            type="tel"
            name="phone"
          />
        </div>

        <div className="relative my-4 ">
          <IoReaderOutline className="absolute left-3 top-4 z-10" />
          <textarea
            className="relative border w-full p-3 pl-9 font-thin rounded border-gray-400 placeholder:text-gray-400 placeholder:font-thin focus:outline-none focus:ring focus:ring-gray-200"
            placeholder="Your requests"
            name="comment"
            id="comment"
          ></textarea>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="orderPrice" value={totalCartPrice} />
        </div>

        <button
          className="bg-amber-600 px-6 py-4 mt-7 text-gray-100 hover:bg-amber-700 transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing order...." : `Order now from ${formatCurrency(totalCartPrice)}`}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
    status: false,
    // orderPrice: parseFloat(data.orderPrice),
  };

  const newOrder = await createOrder(order);
  // console.log(newOrder.id);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
  // return null;
}

export default CreateOrder;
