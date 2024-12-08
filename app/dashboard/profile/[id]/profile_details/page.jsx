
import { fetchProData, updateProfiledata } from "@/lib/profileAction";
import styles from "@/styles/update.module.css"
import Image from "next/image";

const profile_detailspage = async ({ params }) => {
  const { id } = params;
  const ProData = await fetchProData(id)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={ProData.profileImagePath|| "/noavatar.png" }alt="" fill />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProfiledata} className={styles.form}>
          <input type="hidden" name="id" value={ProData.id} />
          <label>Profile Name</label>
          <input type="text" name="profilename" placeholder={ProData.shopname} />
          <label>Profile Month</label>
          <input type="text" name="month" placeholder="Fill profile month" />
          <label>Profile Amount</label>
          <input type="text" name="amount" placeholder="Fill Profile amount" />
          <button>Update Profile</button>
        </form>


      </div>

    </div >
  )
}

export default profile_detailspage
