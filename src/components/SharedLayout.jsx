import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="px-4 md:px-5 xl:px-8">
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
