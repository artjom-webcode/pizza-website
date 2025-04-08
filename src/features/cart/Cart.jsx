import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Header from "../../ui/Header";
import { formatCurrency } from "../../utilities/helpers";

function Cart() {
	const cart = useSelector(getCart);
	const dispatch = useDispatch();
	const totalCartQuantity = useSelector(getTotalCartQuantity);
	const totalCartPrice = useSelector(getTotalCartPrice);

	if (!cart.length) return <EmptyCart />;

	return (
		<div className="px-3 grid h-screen grid-rows-[auto_1fr]">
			<div className="overflow-scroll">
				<Link className="text-amber-700  font-light text-l hover:underline" to="/menu">
					{" "}
					&larr; Back to menu
				</Link>

				<h2 className="my-7 text-center text-2xl font-thin">You cart</h2>

				<ul>
					{cart.map((item) => {
						return <CartItem item={item} key={item.pizzaId} />;
					})}
				</ul>
				<p className="text-right mt-4 text-l font-light">
					{totalCartQuantity} {totalCartQuantity > 1 ? "pizzas" : "pizza"} for{" "}
					{formatCurrency(totalCartPrice)}
				</p>

				<div className="flex justify-end gap-6 mt-16 mb-6">
					<button
						className="text-gray-400 border px-6 py-4"
						onClick={() => dispatch(clearCart())}
					>
						Clear cart
					</button>
					<Link
						className="bg-amber-600 px-6 py-4  text-gray-100 hover:bg-amber-700 transition-all"
						to="/order/new"
					>
						Order pizza
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Cart;
