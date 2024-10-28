import ItemList from "./ItemList";
import BoxItem from "./ItemBox";
import data from "../../data.json"
import waffleImg from "../assets/images/image-waffle-desktop.jpg"
import creme from "../assets/images/image-creme-brulee-desktop.jpg"
import macaron from "../assets/images/image-macaron-desktop.jpg"
import tiramisu  from "../assets/images/image-tiramisu-desktop.jpg"
import bakalava from "../assets/images/image-baklava-desktop.jpg"
import meringue from "../assets/images/image-meringue-desktop.jpg"
import velvet from "../assets/images/image-cake-desktop.jpg"
import brownie from "../assets/images/image-brownie-desktop.jpg"
import panna from "../assets/images/image-panna-cotta-desktop.jpg"
import waffleThumb from "../assets/images/image-waffle-thumbnail.jpg"
import cremeThumb from "../assets/images/image-creme-brulee-thumbnail.jpg"
import macaronThumb from "../assets/images/image-macaron-thumbnail.jpg"
import tiramisuThumb  from "../assets/images/image-tiramisu-thumbnail.jpg"
import bakalavaThumb from "../assets/images/image-baklava-thumbnail.jpg"
import meringueThumb from "../assets/images/image-meringue-thumbnail.jpg"
import velvetThumb from "../assets/images/image-cake-thumbnail.jpg"
import brownieThumb from "../assets/images/image-brownie-thumbnail.jpg"
import pannaThumb from "../assets/images/image-panna-cotta-thumbnail.jpg"
import waffleMobile from "../assets/images/image-waffle-mobile.jpg"
import cremeMobile from "../assets/images/image-creme-brulee-mobile.jpg"
import macaronMobile from "../assets/images/image-macaron-mobile.jpg"
import tiramisuMobile  from "../assets/images/image-tiramisu-mobile.jpg"
import bakalavaMobile from "../assets/images/image-baklava-mobile.jpg"
import meringueMobile from "../assets/images/image-meringue-mobile.jpg"
import velvetMobile from "../assets/images/image-cake-mobile.jpg"
import brownieMobile from "../assets/images/image-brownie-mobile.jpg"
import pannaMobile from "../assets/images/image-panna-cotta-mobile.jpg"
import CartBox from "./CartBox";
import { useState } from "react";
import OrderConfirmed from "./OrderConfired";

export default function MainPage() {
const [isClicked, setIsClick] = useState({
  id:[],
  color:false,
  count:0,
})

const [rr,setRr] = useState([])
const [yc,setYc] = useState([])
const [count,setCount] = useState(0)
const [clickedButtonId, setClickedButtonId] = useState({});
const [empty, setEmpty] = useState(false)
const [isOpen, setOpen] = useState(null)
const [isSum2, setSum2] = useState()
const [isTotal,setTotal] = useState()
const imgMap = [ waffleImg,creme,macaron,tiramisu,bakalava,meringue,velvet,brownie,panna]
const mobileImg = [waffleMobile,cremeMobile,macaronMobile,tiramisuMobile,bakalavaMobile,meringueMobile,velvetMobile,brownieMobile,pannaMobile]
const thumbImg = [waffleThumb,cremeThumb,macaronThumb,tiramisuThumb,bakalavaThumb,meringueThumb,velvetThumb,,brownieThumb,,pannaThumb]
const icon = data.map((data,index) => {
  data.image.desktop = imgMap[index]
  data.image.mobile = mobileImg[index]
  data.image.thumbnail = thumbImg[index]
  return data
});

 
const foodItemList1 =  icon.slice(0,3).map((item,index) => {
    return(
      <BoxItem 
      key={index}
      {...item}
      count={count}
      isCount={setCount}
      updateClick={setIsClick}
      click={isClicked}
      btnId={index}
      btnIndex={setClickedButtonId}
      yc={yc}
      setYc={setYc}
      empty={empty}
      />
    )
  })

  const foodItemList2 =   icon.slice(3,6).map((item,index) => {
    return(
      <BoxItem {...item}
      key={index + 3}
      updateClick={setIsClick}
      click={isClicked}
      btnId={index + 3}
      btnIndex={setClickedButtonId}
      yc={yc}
      setYc={setYc}
      empty={empty}
      />
    )
  })

  const foodItemList3 =   icon.slice(6,9).map((item,index) => {
    return(
      <BoxItem 
      key={index + 3}
      {...item}
      updateClick={setIsClick}
      click={isClicked}
      btnId={index + 6}
      btnIndex={setClickedButtonId}
      yc={yc}
      setYc={setYc}
      empty={empty}
      />
    )
  })
 return(
   <>
   <main className="font-custom-font overflow-x-hidden lg:w-full h-auto min-h-[100vh] pb-5 w-full ">
    <OrderConfirmed
     key={count + 1}
     clicked={isClicked}
     clickedBtn={clickedButtonId}
     yc={yc}
     setYc={setYc}
     setEmpty={setEmpty}
     rr={rr}
     isOpen={isOpen}
     setOpen={setOpen}
     setRr={setRr}
     setSum2={setSum2}
     isTotal={isTotal}
     setTotal={setTotal}
    />
   <div className="lg:w-[95%] mx-auto">
   <h1 className="pt-5 lg:ml-2 ml-8 h-fit text-4xl text-rose-900 font-bold ">Desserts</h1>
    <div className="w-[95%] flex flex-col  mx-auto items-center lg:items-start lg:flex lg:flex-row lg:w-full justify-between h-full">
    <section className="lg:w-[68%]  w-[90%] lg:flex  flex-col lg:justify-between mt-[4%]">
      <ItemList>
        {foodItemList1}
      </ItemList>

      <ItemList>
        {foodItemList2}
      </ItemList>

      <ItemList>
        {foodItemList3}
      </ItemList>

    </section>
    <article className="lg:w-[30%] w-[90%]">
     <CartBox
     key={clickedButtonId} 
     clicked={isClicked}
     clickedBtn={clickedButtonId}
     yc={yc}
     setYc={setYc}
     setEmpty={setEmpty}
     empty={empty}
     rr={rr}
     setRr={setRr}
     setIndie={setOpen}
     setOpen={setOpen}
     setSum2={setSum2}
     isSum2={isSum2}
     isTotal={isTotal}
     setTotal={setTotal}
     />
    </article>
    </div>
   </div> 
   </main>
    
   </>
 )
 
} 