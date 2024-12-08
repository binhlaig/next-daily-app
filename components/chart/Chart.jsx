
import styles from "./chart.module.css"
import ChartBox from "./chartbox/ChartBox"
import { chartBoxProduct, chartBoxConversion, chartBoxRevenue } from "@/data";
import { barChartBoxRevenue, barChartBoxVisit } from "@/chartdata";
import BarBox from "./barchart/BarBox";
import PieChartBox from "./piechart/PieChartBox";
import BigChartBox from "./bigchart/BigChartBox";
import ToBar from "../TobBar/ToBar";



const Chart = async () => {
  const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };


  return (
    <div className={styles.home} >
      <div className={styles.box4}><ToBar /></div>
      <div className={styles.box1}><ChartBox props={chartBoxUser} /></div>
      <div className={styles.box1}><ChartBox props={chartBoxProduct} /></div>
      <div className={styles.box4}><PieChartBox /></div>
      <div className={styles.box1}><ChartBox props={chartBoxConversion} /></div>
      <div className={styles.box1}><ChartBox props={chartBoxRevenue} /></div>
      <div className={styles.box7}><BigChartBox /></div>
      <div className={styles.box1}> <BarBox props={barChartBoxVisit} /></div>
      <div className={styles.box1}><BarBox props={barChartBoxRevenue} /></div>



    </div>
  )
}

export default Chart