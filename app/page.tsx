import { SignOutButton, UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className=" justify-center items-center ">
      <Link href={"/users"}>Users</Link>
    </div>
  );
}
