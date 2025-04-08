import { Link } from "react-router-dom";

function Home() {
	return (
		<div className=" home-bg flex flex-col backgroundImage justify-center items-center center  fixed top-0 left-0 bottom-0 right-0  bg-cover bg-no-repeat	bg-center gap-6">
			<Link to="/menu">
				<img className="w-72" src="img/logo.png" alt="Logo" />
			</Link>
			<Link
				className="text-white font-thin tracking-wider  uppercase text-l border hover:bg-slate-50 hover:text-gray-500 transition duration-200 rounded px-3 py-1"
				to="/menu"
			>
				Enter
			</Link>
		</div>
	);
}

export default Home;
