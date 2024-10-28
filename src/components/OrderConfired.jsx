import { useEffect, useState } from "react"
import confirmed from "../assets/images/icon-order-confirmed.svg"

export default function OrderConfirmed({clicked,yc,rr,isOpen,setOpen,setRr,setSum2,isTotal}) {
  const [isCheckOutList, setIsCheckOutList] = useState(yc) 
  const innerText = document.querySelectorAll("img")
  useEffect(() => {
    setIsCheckOutList(rr)
  },[rr,isOpen])

 const li =  rr.map(item => {
      if (item.mm.counter !== 0) {
        return (
          <>
            <ul key={item.gg} className="flex w-[90%] justify-between h-[80px] items-center  mx-auto border-b border-rose-300">
              <div className="flex items-center gap-2">
                <img className="h-[50px] rounded-md w-[50px]" src={item.mm.img.thumbnail} alt="" />
                <div className="flex flex-col gap-1">
                  <li>{item.gg}</li>
                    <li className="flex gap-3 text-red">{item.mm.counter}x <span className="text-rose-400">@${item.mm.price} </span></li>
                </div>
              </div>
              <li className="text-rose-900 font-bold">${item.mm.counter * parseFloat(Math.round(item.mm.price * 10) / 10)}{parseFloat(Math.round(item.mm.price * 10) / 10) <= 6.5 && item.mm.price != 5 && item.mm.price != 4 ? '0' : '.00'}</li>
            </ul> 
          </>
        )
      }  
  }) 

  function startOrder() {
    setOpen(false)
    setRr([])
    setSum2(0)
    yc.filter(yuu => {
      const keys = Object.keys(clicked.count).map(item => {
        clicked.count[item].em = true
        clicked.count[item].counter = 0
      })
      //setEmpty(clicked.count[item].em)
      
     }) 
    innerText.forEach(item => {
      item.classList.add("border-none")
    })
  }

  return(
    <>
      <div className={`bg-blaopa w-full fixed  z-20 h-[400vh] lg:h-[200vh] overflow-scroll  ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-white lg:w-[450px] mx-auto h-auto min-h-[400px] max-h-[100vh]  grid items-center rounded-md p-5 lg:mt-[5%]  absolute w-full overflow-scroll">
          <div className=" h-auto min-h-[350px] flex flex-col justify-between">
          <div className=" w-[95%] mx-auto h-[130px] flex flex-col items-start gap-3 justify-center">
            <img className="h-[30px]" src={confirmed} alt="" />
            <div>
              <h2 className="text-rose-900 text-3xl font-bold ">Order Confirmed</h2> 
              <p className="text-sm text-rose-300">We hope you enjoy your food</p>
            </div>
            
          </div>
        
          <div className="h-auto min-h-[100px] bg-rose-100 w-[95%] mx-auto rounded-sm flex flex-col p-3">
            {li}
            <div className="h-[80px] flex items-center w-[90%] mx-auto justify-between">
            <span>Order Total</span>
            <p className="text-2xl font-bold">${Math.round(isTotal * 10) / 10}{Math.round(isTotal * 10) / 10 <= 9 && Math.round(isTotal * 10) / 10 != 6.5 && Math.round(isTotal * 10) / 10 != 4.5 && Math.round(isTotal * 10) / 10 != 5.5 ? ".00" : "0"}</p>
            </div>
          </div>
            
        <button onClick={startOrder} className="h-[50px] bg-red w-[90%] ml-4 mt-6 rounded-full text-white">
            Start New Order
        </button>
          </div>
          
        </div>
      </div>
      
    </>
  )
      
}