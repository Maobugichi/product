import emptyCake from "../assets/images/illustration-empty-cart.svg"
import cancel from "../assets/images/icon-remove-item.svg"
import carbonImg from "../assets/images/icon-carbon-neutral.svg"
import ItemList from "./ItemList";
import {useEffect,useState,useRef} from 'react'


export default function CartBox({clicked,clickedBtn,yc,setYc,setEmpty,empty,rr,setRr,setOpen,isSum2,setSum2,isTotal,setTotal}) {
  const [isShow,setShow] = useState(false)
  const [yy,setYy] = useState()
  const imageRef = useRef(null)
  const divRef = useRef(null)
  const countArr = []
  const innerText = document.querySelectorAll("img")
  useEffect(() => {
     const sum = Object.values(clicked.count).reduce((acc, current) => acc + current.counter, 0);
     const total = Object.values(clicked.count).reduce((acc,current) => acc + current.counter * current.price,0)
     setTotal(total)
     
     setShow(null)
  },[clicked,yc])

  useEffect(() => {
    yc.forEach(item => {
      countArr.push(item.mm.counter)
    })
    setRr(countArr)
    setSum2(countArr.reduce((acc, current) => acc + current, 0))
    setRr(yc)
  },[yc,empty])

 let updatedUi = rr.map(item => {
    if (item.mm.counter !== 0) {
      return (
        <>
          <ul key={item.gg}  id={item.gg}  className={` w-[90%] mx-auto h-[67px]  flex flex-col justify-center border-b border-rose-100`}>   
           <li className="gbedu text-sm mb-2">{item.gg}</li> 
          <div className="text-red flex w-full justify-between">
           
          <div className="w-[80%] flex gap-3 text-sm">
             <p>{item.mm.counter}x</p> 
             <div className="flex gap-2">
             <span className="text-rose-300"> @${item.mm.price}</span>  
             <li className="text-rose-500 font-bold">${item.mm.counter * parseFloat(Math.round(item.mm.price * 10) / 10)}{parseFloat(Math.round(item.mm.price * 10) / 10) <= 6.5 && item.mm.price != 5 && item.mm.price != 4 ? '0' : '.00'}</li>
             </div>
            
            </div>
             <div id={item.gg} className="border-2 border-rose-400  flex items-center justify-center h-[18px] w-[18px] rounded-full">
              <img onClick={removeItem} id={item.gg}  src={cancel} alt="cancel" />
             </div>
            
           </div>
          </ul>  
        </>
      )
    }  
 }) 
  
 function removeItem(e) {
   setYy(e.target.id)
   setShow(true)
   const yu =  rr.filter(item => {
     return e.target.id !== item.gg
  }) 
   setYc(yu)
    yc.filter(yuu => {
    const keys = Object.keys(clicked.count).map(item => {
      clicked.count[e.target.id].em = true
      clicked.count[e.target.id].counter = 0
      innerText.forEach(item => {
        if (item.id == e.target.id) {
          item.classList.add("border-none")
        }
      })
    })
    setEmpty(clicked.count[e.target.id].em)
   })  
 }

 function changeShow() {
  setOpen(true)
 }

  return(
    <div ref={divRef} className="bg-white w-full lg:w-full h-auto  min-h-[250px] rounded-lg p-3 pb-5 mt-8">
      <h2 className=" w-[90%] h-[50px] flex items-center mx-auto text-red text-xl font-bold ">Your Cart({isSum2})</h2>
      { yc.length !== 0  && isSum2 > 0  ? 
        <>
          <div ref={imageRef}>
            { updatedUi }
          </div>
            
          <ul className="flex w-[90%] mx-auto justify-between h-[80px] items-center">
            <li className="text-sm text-rose-500">Order Total</li>
            <li className="text-2xl font-bold">${Math.round(isTotal * 10) / 10}{Math.round(isTotal * 10) / 10 <= 9 && Math.round(isTotal * 10) / 10 != 6.5 && Math.round(isTotal * 10) / 10 != 4.5 && Math.round(isTotal * 10) / 10 != 5.5 ? ".00" : "0"}</li>
          </ul>

          <div className="text-sm h-[55px] w-[90%] mx-auto gap-2 rounded-[6px] flex items-center justify-center bg-roseFify">
            <img src={carbonImg} alt="gas icon" />
            <p className="text-rose-500">This is a <span className="text-rose-900">carbon neutral</span> delivery</p>
          </div>

          <button onClick={changeShow} className="h-[60px] bg-red w-[90%] ml-4 mt-6 rounded-full text-white">
            Confirm Order
          </button>
        </>
        
        : 
      <div className=" flex flex-col items-center w-full justify-center mt-7">
      <img  src={emptyCake} alt="cut cake" />
      <span className="text-rose-500 font-semibold">Your added items will appear here</span>
      </div> 
    
      }
    </div>  
  )
}