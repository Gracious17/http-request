"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Button({ id }) {
  const router = useRouter();
  function handleClick() {
    router.push(`/users/${id}`);
  }
  return <div onClick={handleClick}>Button</div>;
}
