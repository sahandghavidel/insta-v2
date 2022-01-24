import minifaker from "minifaker";
import { useSession } from "next-auth/react";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";
export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggestions = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-none">
      {session && (
        <Story
          img={session.user.image}
          user={session.user.username}
          isUser="true"
        />
      )}
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.img} user={profile.username} />
      ))}
    </div>
  );
}
