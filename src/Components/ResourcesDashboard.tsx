"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

const ResourcesDashboard = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <nav className="fixed top-28 w-full py-12 flex list-none px-40 text-xl backdrop-blur-md  bg-white/20 border-b border-white/20">
      <div className="flex flex-1 gap-10">
        {user?.email === "affanhamid007@gmail.com" && (
          <Link href={"/admin"}>
            <li>Admin</li>
          </Link>
        )}
        <li>Resources</li>
      </div>
      <div className="flex gap-10">
        <li>{user?.name}</li>
        <li>
          {!!!user ? (
            <a href="/api/auth/login">Login</a>
          ) : (
            <a href="/api/auth/logout">Logout</a>
          )}
        </li>
      </div>
    </nav>
  );
};

export default ResourcesDashboard;
