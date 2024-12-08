"use client"

import { useSession } from "next-auth/react";
import LoginPage from "./(auth)/login/page";
import CartPage from "./dashboard/cart/page";

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user

  return (
    <div>
      {!user && (
        <div>
          <LoginPage/>     
        </div>
      )}

      {user && (
        <div>
          <CartPage/>
         
        </div>
      )}
    </div>
  );
}
