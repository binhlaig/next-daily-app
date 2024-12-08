
import Link from 'next/link'
import React from 'react'
import styles from "@/styles/income.module.css"
import { fetchOutcome } from '@/lib/data'
import { deleteOutcome } from '@/lib/action'
import Paginate from '@/components/Pagination/paginate'
import Search from '@/components/Search/search'



const OutcomePage = async ({ searchParams }) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { Count, Outcomes, Total, Countamount } = await fetchOutcome(q, page);

  const calcSubtotal = () => {
    return Total?.reduce((total, item) => {
      return total + 1 * item.amount;
    }, 0);
  };

  const calcSubtotal12 = () => {
    return Countamount?.reduce((total, item) => {
      return total + 1 * item.amount;;
    }, 0);
  };
 const cot = calcSubtotal12()


  const sub = calcSubtotal();
  const nFormat = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2 });

  console.log(cot);
  return (

    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/outcome/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            
            <td>ဆိုင်အမည်</td>
            <td>ဘဏ် အကောင့်</td>
            <td>နေ့စွဲ</td>
            <td>ပမာဏ</td>
            <td>Notice</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {Outcomes.map((outcome) => (
            <tr key={outcome.id}>
              <td>{outcome.shop}</td>
              <td>{outcome.bank}</td>
              <td>{outcome.date?.toString().slice(4, 16)}</td>
              <td> {nFormat.format(outcome.amount)}¥  </td>
              <td> {outcome.notice || "မရှိ"}</td>


              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/outcome/${outcome.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteOutcome}>
                    <input type="hidden" name="id" value={outcome.id} />
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
          <div>
            စုစုပေါင်း : {Count} ခု & {nFormat.format(cot)} ¥ 
          </div>

          စုစုပေါင်း ပမာဏ : ¥ {nFormat.format(sub)}
        </div>
      </table>
      <Paginate count={Count} />
    </div>
  )
}

export default OutcomePage