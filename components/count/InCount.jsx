"use client"
import CountUp from 'react-countup';
const InCount = ({props}) => {
    return (
        <div>
            <CountUp duration={5.15} end={props} prefix="¥ "/>
        </div>
    )
}

export default InCount