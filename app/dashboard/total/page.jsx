
import styles from "@/styles/income.module.css"
import Link from "next/link"
import Search from '@/components/Search/search'
import { fectchTotal } from "@/lib/data"

const TotalPage = async () => {
  const totalAll = await fectchTotal();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/total/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>ထွက်ငွေ</td>
            <td>ဝင်ငွေ</td>
            <td>Save</td>
            <td>Amount</td>
            <td>လ အမည်</td>
            <td>Action</td>
          </tr>
        </thead>
        {totalAll.map((total) => (
          <tbody key={total.id}>
            <tr>
              <td>{total.totalOut} ¥</td>
              <td>{total.totalIn} ¥</td>
              <td>{total.totalSave} ¥</td>
              <td>{total.totalAmount} ¥</td>
              <td>{total.month}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                </div>
              </td>
            </tr>

          </tbody>


        ))}

      </table>
    </div>
  )
}

export default TotalPage