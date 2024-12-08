
import styles from "@/styles/income.module.css"

import Search from '@/components/Search/search'
import Link from "next/link"

const Profilepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard">
          <button className={styles.addButton}>
            Add New Profile
          </button>
        </Link>
      </div>
       

    </div>
  )
}

export default Profilepage
