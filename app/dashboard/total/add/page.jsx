import React from 'react'
import styles from "@/styles/add.module.css"
import { addTotal } from '@/lib/action'

const AddPage = () => {
    return (
        <div className={styles.container}>
            <form action={addTotal} className={styles.form}>            
                <input type="text" name="totalOut" placeholder="Out Amount" required />
                <input type="text" name="totalSave" placeholder="Save Amount" required />
                <input type="text" name="totalIn" placeholder="In Amount" required />
                <input type="text" name="month" placeholder="Month" required />
                <input type="text" name="totalAmount" placeholder="ပမာဏ" required />  
                <input type="date" name="date" required />
                <textarea name="notice" placeholder="မှတ်ချက်" />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default AddPage