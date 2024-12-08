
import { fetchProData, updateProfiledata } from "@/lib/profileAction";
import Link from "next/link";
import styles from "@/styles/income.module.css"

const page = async ({ params }) => {
  const { id } = params;
  const ProData = await fetchProData(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href={`/dashboard/profile/${id}/profile_details`}>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
    </div >

  )

}

export default page
