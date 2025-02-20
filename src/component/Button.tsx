"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();
  function handleClick() {
    router.push(`/users/}`);
  }
  return <div onClick={handleClick}>Button</div>;
}
