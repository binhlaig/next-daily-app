
import Card from "@/components/card/card"
import styles from "@/styles/dashboard.module.css"
import Transaction from "@/components/transaction/transaction"



const dashboardPage = () => {
 
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
        </div>
        <Transaction />
      </div>
      

    </div>
  )
}

export default dashboardPage