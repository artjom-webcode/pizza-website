import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    // <div className="grid h-screen grid-rows-[auto_1fr_auto]">
    //   {isLoading && <Loader />}
    //   <Header />

    //   <div className="overflow-scroll">
    //     <main className="mx-auto max-w-3xl">
    //       <Outlet />
    //     </main>
    //   </div>

    //   <CartOverview />
    // </div>
    <div className="relative h-screen overflow-hidden">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll h-full pb-28">
        {" "}
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <div className="fixed bottom-0 left-0 w-full z-50">
        <CartOverview />
      </div>
    </div>
  );
}

export default AppLayout;
