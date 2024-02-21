import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "@/lib/zustand/useAuthStore";

const PublicLayout = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
         src="/assets/images/auth_bg.jpg"
            alt="logo"
            className="hidden xl:block h-screen  object-cover bg-no-repeat bg-white"
          />
        </>
      )}
    </>
  );
};

export default PublicLayout;
