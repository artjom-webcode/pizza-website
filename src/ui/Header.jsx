import { useEffect } from "react";
import { AiOutlineSketch } from "react-icons/ai";
import { Link } from "react-router-dom";
// import SearchOrder from '../features/order/SearchOrder';
// import Username from '../features/user/Username';

function Header() {
  return (
    <header className="text-center pt-4 uppercase">
      <Link to="/menu" className="tracking-widest text-2xl font-light">
        Cannella Pizza
      </Link>
      <p className=" tracking-[3px] text-[12px] font-thin">L'anima Italiana</p>
      <div className="flex justify-center items-center gap-2 my-3">
        <div className="h-[1px] w-full bg-gray-400"></div>
        <span>
          <AiOutlineSketch />
        </span>
        <div className="h-[1px] w-full bg-gray-400"></div>
      </div>
    </header>
  );
}

export default Header;
