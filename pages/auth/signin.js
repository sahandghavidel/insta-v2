import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt=""
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
        />

        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                src="https://socodigital.com/wp-content/uploads/2021/03/Instagram.png"
                alt=""
                className="w-32 object-cover"
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes.
              </p>
              <button
                className="bg-red-400 rounded-lg text-white p-3 whitespace-nowrap hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
