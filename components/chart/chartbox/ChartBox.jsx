"use client"
import Link from "next/link";
import "./chartbox.scss"
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import InCount from "@/components/count/InCount";
import Image from "next/image";

const ChartBox = ({ props }) => {

  return (
    <div className='chartBox'>
      <div className='boxInfo'>
        <div className='title'>
          
          <span>{props.title}</span>
        </div>
        <h1><InCount props={props.number} /></h1>
        <Link href="/" style={{ color: props.color }}>View all</Link>
      </div>
      <div className='chartInfo'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2}

                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>
        <div className='texts'>
          <span className='percentage'
            style={{
              color: props.percentage < 0 ? "tomato" : "limegreen"
            }}
          >{props.percentage}%</span>
          <span className='duration'>this month</span>
        </div>

      </div>
    </div>



  )
}

export default ChartBox