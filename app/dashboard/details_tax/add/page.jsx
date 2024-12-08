
import styles from "@/styles/add.module.css"
import { bankList } from "@/data";
import { addtaxs } from "@/lib/taxs_action";

const page = () => {
    return (
        <div className={styles.container}>
            <form action={addtaxs} className={styles.form}>
                <input type="date" name="date" placeholder="" required />
                <input type="text" name="amount" placeholder="ပမာဏ" required />
                <input type="text" name="taxname" placeholder="ဝန်ဆောင်မှုအမျိုးအစား" required />
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

export default page
