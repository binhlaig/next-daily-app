
import styles from "@/styles/income.module.css"
import Link from "next/link"
import Search from "@/components/Search/search"
import { fetchTaxs } from "@/lib/data_tax";
import Paginate from "@/components/Pagination/paginate";

const otherUsgaepage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { Count, Tax } = await fetchTaxs(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>

        <Search placeholder="Search for taxs..." />
        <Link href="/dashboard/details_tax/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>နေ့စွဲ</td>
            <td>ပစွည်းအမျိုးအစား</td>
            <td>bank</td>
            <td>ပမာဏ</td>
            <td>မှတ်ချက်</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {Tax.map((taxs) => (


            <tr key={taxs.id} >
              <td>2024/10/26</td>
              <td>အိမ်လခ</td>
              <td>UFJ</td>
              <td>
                70000 ¥
              </td>
              <td>NO</td>


              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/income`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" value="" />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>

          ))}
        </tbody>
        <div>
        </div>

      </table>
      <Paginate count={Count} />
    </div>
  )
}

export default otherUsgaepage
