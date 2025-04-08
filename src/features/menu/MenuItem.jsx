import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import {
	addItem,
	decreaseItemQuantity,
	deleteItem,
	getCart,
	getCurrentQuantityById,
	increaseItemQuantity,
} from "../cart/cartSlice";

function MenuItem({ pizza }) {
	const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
	const dispatch = useDispatch();

	const currentQuantity = useSelector(getCurrentQuantityById(id));

	const isInCart = currentQuantity > 0;

	function handleAddToCart() {
		const newItem = {
			pizzaId: id,
			name,
			quantity: 1,
			unitPrice,
			totalPrice: unitPrice * 1,
		};

		dispatch(addItem(newItem));
	}

	return (
		<li className="my-8 border-b py-4">
			<div className=" relative">
				<img
					className={`  ${soldOut ? "opacity-70 grayscale" : ""}`}
					src={imageUrl}
					alt={name}
					// className={`${isInCart ? "opacity-90 grayscale" : "grayscale-0"} `}

					// className={`${"opacity-90 grayscale transition hover:grayscale-0"} `}
					// className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
				/>
				{currentQuantity ? (
					<div className="bg-amber-600/60 py-4 absolute left-0 bottom-0 right-0 h-14  text-center text-xl ">
						<span className="text-white opacity-100 font-thin">
							{currentQuantity}{" "}
							{currentQuantity === 1 ? "item in cart" : "items in cart"}
						</span>
					</div>
				) : null}
			</div>

			<div className="mt-3">
				<div className="flex justify-between">
					<h3 className="text-2xl uppercase font-extralight">{name}</h3>
					<div className="self-top">
						{isInCart && (
							<div>
								<div className="flex gap-3 items-center">
									<button
										className="bg-amber-600 px-4 py-1  text-gray-100 hover:bg-amber-700 transition-all"
										onClick={() => dispatch(increaseItemQuantity(id))}
									>
										+
									</button>
									<span>{currentQuantity}</span>
									<button
										className="bg-amber-600 px-4 py-1  text-gray-100 hover:bg-amber-700 transition-all"
										onClick={() => dispatch(decreaseItemQuantity(id))}
									>
										-
									</button>
								</div>
								{/* <button
									className="bg-amber-600 px-4 py-1  text-gray-100 hover:bg-amber-700 transition-all"
									onClick={() => dispatch(deleteItem(id))}
								>
									Delete
								</button> */}
							</div>
						)}

						{!soldOut && !isInCart && (
							<button
								className="bg-amber-600 px-4 py-1  text-gray-100 hover:bg-amber-700 transition-all"
								onClick={handleAddToCart}
							>
								+Add
							</button>
						)}
						{soldOut && <span className="font-light">Sold Out</span>}
					</div>
				</div>
				<p className="text-sm font-thin w-80 mt-2 pr-3">{ingredients}</p>
			</div>
		</li>
	);
}

export default MenuItem;
