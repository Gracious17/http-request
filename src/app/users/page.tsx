"use client";
import UserCard from "@/component/UserCard";
// import UserCard from "@/component/UserCard";
import React, { useEffect, useState } from "react";
type Users = {
  id: number;

  name: string;
  username: string;
  email: string;
  phone: string;
};
const Page = () => {
  const [users, setUser] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(users);
  //   https://jsonplaceholder.typicode.com/users
  useEffect(() => {
    async function fetchuser() {
      try {
        const res = await fetch(" https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("unable to fetch");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError("Failed to fetch users!");
        if (error instanceof Error) {
          setError(`Fetching faild ${error.message}`);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchuser();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div className="grid grid-rows-1   sm:grid items-center justify-center text-center">
      {users.map((user) => {
        return (
          <>
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              phone={user.phone}
              email={user.email}
              id={user.id}
            />
          </>
        );
      })}
    </div>
  );
};

export default Page;
