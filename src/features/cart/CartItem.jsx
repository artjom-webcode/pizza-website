import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import {
	decreaseItemQuantity,
	deleteItem,
	getCurrentQuantityById,
	increaseItemQuantity,
} from "./cartSlice";
import { IoTrashBinOutline, IoTrashOutline } from "react-icons/io5";

function CartItem({ item }) {
	const { pizzaId, name, quantity, totalPrice } = item;
	const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
	const dispatch = useDispatch();

	return (
		<li className="flex justify-between border-b py-4">
			<p className="font-thin text-lg">
				<span className="font-light mr-2">{quantity}x</span>
				<span>{name}</span>
			</p>
			<div className="flex items-center gap-3">
				<div className="flex gap-4 items-center">
					<button
						className="bg-amber-600 px-4 py-1  text-gray-100 hover:bg-amber-700 transition-all"
						onClick={() => dispatch(increaseItemQuantity(pizzaId))}
					>
						+
					</button>
					<span>{currentQuantity}</span>
					<button
						className="bg-amber-600 px-4 py-1  text-gray-100 hover:bg-amber-700 transition-all"
						onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
					>
						-
					</button>
				</div>

				<p className="w-10 mr-2">{formatCurrency(totalPrice)}</p>
				<button className="text-xl w-8" onClick={() => dispatch(deleteItem(pizzaId))}>
					<IoTrashOutline />
				</button>
			</div>
			{/* <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} /> */}
		</li>
	);
}

export default CartItem;
