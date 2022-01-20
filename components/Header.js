import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
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
      <h1>Hello world!</h1>
      {/* Middle */}

      {/* Right */}
    </div>
  );
}
