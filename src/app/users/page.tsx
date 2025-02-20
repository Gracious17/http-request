"use client";
import UserCard from "@/component/UserCard";
import React, { useEffect, useState } from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};
const Page = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(user);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res) throw new Error("failed to fetch users");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError("fetching users failed");
        if (error instanceof Error) {
          setError(`unable to fetch  users `);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading) return <h1>Fetching Users from json placeholder...</h1>;
  if (error) return <h1 className="text-xl text-red-500">{error}</h1>;
  return (
    <div className="bg-black text-white ">
      {user.map((User) => {
        return (
          <>
            <UserCard
              key={User.id}
              name={User.name}
              username={User.username}
              email={User.email}
              phone={User.phone}
              website={User.website}
            />
          </>
        );
      })}
    </div>
  );
};

export default Page;
