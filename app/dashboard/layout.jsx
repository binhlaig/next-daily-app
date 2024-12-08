"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import styles from "@/styles/dashboard.module.css"
import Sidebar from "@/components/sidebar/Sidebar"
import Navbar from "@/components/navbar/Navbar"
const layout = ({children}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user
  if (!session) {
    router.push('/login');
    return;
  }
  console.log(user);
  return (

    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>  
          <Navbar/>
            {children}
        </div>

    </div>
   
  )
}

export default layout