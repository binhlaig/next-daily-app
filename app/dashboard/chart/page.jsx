
import Chart from "@/components/chart/Chart"
import styles from "@/styles/dashboard.module.css"

const page = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <Chart />
                
            </div>

        </div>
    )
}

export default page