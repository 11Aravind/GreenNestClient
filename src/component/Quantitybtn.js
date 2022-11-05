import { useState } from "react"

export default function Quantitybtn() {
    const[quantity_count,handlequantitycount]=useState(1);
  return (
    <>
       <div className="quantity_container">
              <div className="quantity_btn decreass_quantity" onClick={()=>{handlequantitycount(quantity_count-1)}}>-</div>
              <div className="quantity_btn quantity_count">{quantity_count}</div>
              <div className="quantity_btn" onClick={()=>{handlequantitycount(quantity_count+1)}}>+</div>
            </div>
    </>
  )
}
