"use client"
import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

const scanner = () => {
    const [scannResult, setScannResult] = useState(null);

    useEffect(()=> {
        const scann = new Html5QrcodeScanner('reader', {
            qrbox:{
                width: 350,
                height:350,
            },
            fps: 10,
           
        });
        scann.render(success,error);
        function success(result) {
            scann.clear();
            setScannResult(result);
        }
        function error(err){
            console.warn(err);
            
        }

    },[])
   
  return (
    <div>
        <h1>QR Scanner</h1>
        { scannResult
        ?  <div>Success : <a href={scannResult}>{scannResult}</a></div>
        
        :  <div id='reader'></div>
        }
    </div>
  )
}

export default scanner