import React from 'react';
import coinbase from './images/Vector.png';
import blockchain from './images/Blockchain.png';
import bitmex  from './images/bitmex.png';   
import binance from './images/binance.png';

function Sponsors() {
  return (
    <>
    <div className="sponsors">
        <div className="elements">
            <img src={coinbase} alt="" />
            <img src={blockchain} alt="" />
            <img src={binance} alt="" />
            <img src={bitmex} alt="" />
        </div>
    </div>
    </>
  )
}

export default Sponsors