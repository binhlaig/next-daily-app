
import styles from "@/styles/update.module.css"
import Image from "next/image"
import { fetchIncomes } from "@/lib/data"
import { companies } from "@/data"
import { updateIncome } from "@/lib/action"


const UpdateInpage = async ({ params }) => {
  const { id } = params;
  const income = await fetchIncomes(id);
  const nFormat = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2 });
  const count = income.amount;


  return (
    <div className={styles.container}>

      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
      </div>

      <div className={styles.formContainer}>
        <form action={updateIncome} className={styles.form}>
          <input type="hidden" name="id" value={income.id} />
          <label>Date</label>
          <input type="text" name="" placeholder={income.date?.toString().slice(4, 16)} />
          <label>Amount</label>
          <input type="text" name="amount" placeholder={nFormat.format(count)} />
          <label> Update Date</label>
          <input type="date" name="date" placeholder="" />
          <label>notice</label>
          <textarea type="text" name="notice" placeholder={income.notice} />
          <label>Is Company?</label>

          <select name="compamy" id="compamy" key={income.id}>
            <option >
              {income.compamy}
            </option>
            {companies.map((company) => (
              <option key={company.id} > {company.company}</option>
            ))}
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateInpage