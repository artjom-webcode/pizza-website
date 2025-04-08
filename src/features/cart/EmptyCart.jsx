import { Link } from "react-router-dom";
import Header from "../../ui/Header";

function EmptyCart() {
	return (
		<div className="px-4 py-7">
			<Link className="text-amber-700  font-light text-l hover:underline" to="/menu">
				&larr; Back to menu
			</Link>

			<p className="mt-9 text-l font-light">
				Your cart is still empty. Start adding some pizzas :)
			</p>
		</div>
	);
}

export default EmptyCart;
