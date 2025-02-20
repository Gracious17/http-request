import Link from "next/link";
import React from "react";
const Home = () => {
  return (
    <div className="">
      Home
      <Link href="/users">
        <button className="w-[200px]  border-2  border-black block">
          view users
        </button>
      </Link>
    </div>
  );
};

export default Home;
