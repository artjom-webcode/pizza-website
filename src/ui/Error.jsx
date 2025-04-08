import { Link, Navigate, useRouteError } from "react-router-dom";

function Error() {
	const navigate = Navigate();
	const error = useRouteError();

	return (
		<div>
			<h1>Something went wrong 😢</h1>
			<p>{error.data || error.message}</p>

			<button onClick={() => navigate(-1)}>Go back</button>
		</div>
	);
}

export default Error;
