import styles from "@/styles/add.module.css"
import { bankList } from "@/data";
import { addOutcome } from "@/lib/action";
import { fetchshops } from "@/lib/data";

const addPage = async () => {
  const shops = await fetchshops()
  return (
    <div className={styles.container}>
      <form action={addOutcome} className={styles.form}>
        <input type="date" name="date" placeholder="" required />
        <input type="text" name="amount" placeholder="ပမာဏ" required />
        <select name="shop" id="shop">
          <option>
            Is Shop?
          </option>
          {shops.map((shop) => (
            <option name="creator" key={shop.id}>{shop.shopname}</option>
          ))}
        </select>
        <select name="bank" id="bank">
          <option >
            Is Bank?
          </option>
          {bankList.map((bank) => (
            <option key={bank.id} > {bank.title}</option>
          ))}
        </select>
        <textarea name="notice" placeholder="မှတ်ချက်" />
        <button type="submit">Submit</button>
      </form>

    </div >
  )
}

export default addPage