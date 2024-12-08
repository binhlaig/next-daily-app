
import styles from "./card.module.css"
import { MdSupervisedUserCircle } from "react-icons/md";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { fetchOutcome } from "@/lib/data";
import InCount from "../count/InCount";
import { fetchIncome } from "@/lib/data";



const card = async () => {
  const { Total } = await fetchOutcome();
  const { TotalIn } = await fetchIncome()
  const calcSubtotal = () => {
    return Total?.reduce((total, item) => {
      return total + 1 * item.amount;
    }, 0);
  };
  const calIntotal = () => {
    return TotalIn?.reduce((total, item) => {
      return total + 1 * item.amount;
    }, 0);
  };
  const subIn = calIntotal()
  const sub = calcSubtotal();
  const Balsub = subIn - sub


console.log( Balsub);

  return (
    <div className={styles.container1}>
      <div className={styles.container}>
        <MdSupervisedUserCircle size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total In</span>
          <span className={styles.number}>
            <InCount props={subIn} />
          </span>
          <span className={styles.detail}>
            <span className={styles.positive}>
              12%
            </span>
            than previous week
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <CurrencyExchangeIcon size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total Current</span>
          <span className={styles.number}>
            <InCount props={sub} />
          </span>
          <span className={styles.detail}>
            <span className={styles.positive}>
              12%
            </span>
            than previous week
          </span>
        </div>
      </div>

      <div className={styles.container}>
        <AccountBalanceWalletIcon size={24} />
        <div className={styles.texts}>
          <span className={styles.title}>Total Save</span>
          <span className={styles.number}>
          <InCount props={Balsub} />
          </span>
          <span className={styles.detail}>
            <span className={styles.positive}>
              12%
            </span>
            than previous week
          </span>
        </div>
      </div>
    </div>

  )
}

export default card