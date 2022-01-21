import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative inline-grid lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png"
            layout="fill"
            className="object-contain"
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
          <HomeIcon className="navBtn" />
          <PaperAirplaneIcon className="navBtn rotate-45" />
          <PlusCircleIcon className="navBtn" />
          <PlusCircleIcon className="h-6 md:hidden" />
          <UserGroupIcon className="navBtn " />
          <HeartIcon className="navBtn " />
          <img
            className="h-10 rounded-full cursor-pointer"
            src="https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048"
            alt="user-image"
          />
        </div>
      </div>
    </div>
  );
}
