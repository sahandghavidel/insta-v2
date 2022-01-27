import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative inline-grid lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png"
            layout="fill"
            className="object-contain"
            onClick={() => router.push("/")}
          />
        </div>
        {/* Middle */}
        <div className="relative mt-1 p-3 rounded-md ">
          <div className="absolute inset-y-0  pl-3 flex items-center">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10  border-gray-300 sm:text-sm  rounded-md focus:ring-black focus:border-black"
          />
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4 ">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          {session ? (
            <>
              <PlusCircleIcon
                className="navBtn"
                onClick={() => setOpen(true)}
              />
              <PlusCircleIcon
                className="h-6 md:hidden"
                onClick={() => setOpen(true)}
              />
              <img
                className="h-10 rounded-full cursor-pointer"
                src={session.user.image}
                alt="user-image"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}
