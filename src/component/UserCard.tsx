import React from "react";
// import Button from "./Button";
type ClickId = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const UserCard = ({ name, username, email, phone, website }: ClickId) => {
  return (
    <div className="text-center items-center justify-center shadow-xl shadow-blue-400 flex flex-col gap-4 mt-4 w-12">
      <h1 className="">Name: {name}</h1>
      <h3 className="text-red-500">Username :{username}</h3>

      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      {/* <Button id={id} /> */}
    </div>
  );
};

export default UserCard;
