"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Profile = () => {
  const { data: session, status } = useSession();

  return (
    <div className="group relative">
      <Link href="/login" className="flex justify-center items-center">
        <div
          className={`w-10 aspect-square rounded-full bg-transparent ${
            session ? "backdrop-blur-lg border border-white/20" : ""
          } text-base flex justify-center items-center`}
        >
          {session && session.user ? (
            session.user.image ? (
              <Image
                src={session.user.image}
                alt="Profile"
                className="w-full h-full rounded-full"
                width={100}
                height={100}
              />
            ) : (
              session.user.email &&
              session.user.email.slice(0, 1).toLocaleUpperCase()
            )
          ) : (
            <FaUserCircle className="text-4xl " />
          )}
        </div>
      </Link>
      <div className="absolute top-full -translate-x-1/2 left-1/2 mt-2 bg-white text-background px-2 py-1 text-sm w-40 text-center rounded-lg hidden group-hover:block">
        {session ? (
          <span>
            Signed in as{" "}
            <span className="text-base">{session?.user?.name}</span>
          </span>
        ) : (
          <span>Not Signed in</span>
        )}
      </div>
    </div>
  );
};

export default Profile;
