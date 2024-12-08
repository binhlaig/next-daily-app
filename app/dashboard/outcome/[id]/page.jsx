import styles from "@/styles/add.module.css"
import { bankList } from "@/data";
import { fetchshops } from "@/lib/data";
import { fetchOutconeData } from "@/lib/data";
import { updateOutcomedata } from "@/lib/action";



const UpdateOutPage = async ({ params }) => {
  const { id } = params;
  const OutcomeData = await fetchOutconeData(id);
  const nFormat = new Intl.NumberFormat(undefined, { minimumFractionDigits: 2 });
  const count = OutcomeData.amount;
  const shops = await fetchshops();

  return (
    <div className={styles.container}>
      <form action={updateOutcomedata} className={styles.form}>
        <input type="hidden" name="id" value={OutcomeData.id} />
        
        <input type="text" placeholder={OutcomeData.date?.toString().slice(4, 16)} />

        <input type="text" name="amount" placeholder={nFormat.format(count)} />
        <select name="shop" id="shop" key={OutcomeData.id}>
          <option >
            {OutcomeData.shop}
          </option>
          {shops.map((shop) => (
            <option key={shop.id} > {shop.shopname}</option>
          ))}
        </select>
        <select name="bank" id="bank" key={OutcomeData.id}>
          <option >
            {OutcomeData.bank}
          </option>
          {bankList.map((bank) => (
            <option key={bank.id} > {bank.title}</option>
          ))}
        </select>

        <input type="date" name="date" placeholder="" />
        <textarea name="notice" placeholder={OutcomeData.notice || "မရှိ"} />
        <button type="Update">Submit</button>
      </form>

    </div >
  )
}

export default UpdateOutPage