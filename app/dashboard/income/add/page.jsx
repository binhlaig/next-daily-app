
import styles from "@/styles/add.module.css"
import { companies } from "@/data"
import { addIncome } from "@/lib/action"

const AddInPage = () => {
  
  return (
    <div className={styles.container}>
      <form action={addIncome} className={styles.form}>
        <input type="date" name="date" placeholder="" required />
        <input type="text" name="amount" placeholder="ပမာဏ" required />
        <input type="text" name="month" placeholder="ပေးဆောင်သောလ" required />  
        <select name="compamy" id="compamy">
          <option >
            Is Company?
          </option>
          {companies.map((company) => (
            <option key={company.id} > {company.company}</option>
          ))}
        </select>
        <textarea name="notice" placeholder="မှတ်ချက်" />
        <button type="submit">Submit</button>
      </form>

    </div >
  )
}

export default AddInPage