import React from "react";
import Button from "./Button";
type ClickId = {
  id: number;

  name: string;
  username: string;
  email: string;
  phone: string;
};

const UserCard = ({ name, username, email, phone, id }: ClickId) => {
  return (
    <div className="text-center items-center justify-center shadow-xl shadow-blue-400 flex flex-col gap-4 mt-4">
      <h1 className="font-bold text-2xl text-red-400">{name}</h1>
      <h3 className="text-red-500">{username}</h3>

      <p>{email}</p>
      <p>{phone}</p>
      <Button id={id} />
    </div>
  );
};

export default UserCard;
