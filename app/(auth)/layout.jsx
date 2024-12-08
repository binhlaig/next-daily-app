"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
const layout = ({children}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user
  if (user) {
    router.push('/dashboard');
    return;
  }

  console.log(user);
  return (
    <div>
           {children}    
    </div>
  )
}
export default layout