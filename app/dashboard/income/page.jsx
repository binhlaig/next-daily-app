
import Link from 'next/link'
import React from 'react'
import styles from "@/styles/income.module.css"
import { fetchIncome } from '@/lib/data'
import { deleteIncome } from '@/lib/action'
import Paginate from '@/components/Pagination/paginate'
import Search from '@/components/Search/search'


const IncomePage = async({searchParams}) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {Count,Incomes,TotalIn} = await fetchIncome(q,page);

  const calcSubtotal = () => {
    return TotalIn?.reduce((total, item) => {
        return total + 1 * item.amount;
    }, 0);
};
const sub = calcSubtotal();
const nFormat = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2 });

  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <Search placeholder="Search for a user..." />
        <Link href="/dashboard/income/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <td>နေ့စွဲ</td>
            <td>Company</td>
            <td>ပမာဏ</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          
        {Incomes.map((income)=>(
            <tr key={income.id}>
           
              <td>{income.date?.toString().slice(4, 16)}</td>
              <td>{income.compamy}</td>
            
              <td>
              {nFormat.format(income.amount)}  ¥
              </td>
            
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/income/${income.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteIncome}>
                    <input type="hidden" name="id" value={income.id}  />
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
          total : {Count} amount
          </div>
         Total Amount: {nFormat.format(sub)}  ¥ 
         
        </div>
      
      </table>
      <Paginate count={Count} />
    </div>
  )
}

export default IncomePage