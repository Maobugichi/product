import img from "../assets/images/image-brownie-mobile.jpg";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import increase from "../assets/images/icon-increment-quantity.svg"
import decrease from "../assets/images/icon-decrement-quantity.svg"
import { useRef,useEffect,useState,useLayoutEffect } from 'react';

export default function BoxItem({category,image,name,price,updateClick,click,btnId,btnIndex,count,isCount,yc,setYc,empty}) {
  const [btn, setBtn] = useState(null)
  const imageRef = useRef(null);
  const itemsRef = useRef(null);
  const paraRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  
    return () => window.removeEventListener('resize', handleResize);
    }, [width,click])

  return (
    <div id={btnId} ref={itemsRef} className="mb-3 relative h-[300px]  w-[full]  lg:w-[240px] lg:h-[350px]  flex flex-col justify-between">
        <img id={name} ref={imageRef}  className={` 'transition-all duration-100 lg:h-[70%] rounded-lg  h-[200px] w-full `}  alt={name} src={width >= 650 ? image.desktop : image.mobile}/>
          <CartButton
          key={name}
          count={count}
          isCount={isCount} 
          checkClick={updateClick}
          clickStatus={click}
          btnId={btnId}
          btnIndex={btnIndex}
          btn={btn}
          setBtn={setBtn}
          category={name}
          price={price}
          yc={yc}
          setYc={setYc}
          empty={empty}
          image={image}
          />
     <div>
      <span className="text-rose-400">{category}</span>
      <p id={btnId} ref={paraRef} className="text-rose-900 font-bold">{name}</p>
      <span className="text-red font-semibold">${price}</span>
     </div>
    </div>
  );
}


function CartButton({category,index,price,setIndex,btnIndex,checkClick,clickStatus,btnId,btn,setBtn,yc,setYc,empty,image}) {
 const buttonRef = useRef(null);
 const [indie, setIndie] = useState(null)
 const [emt, setEmt] = useState() 
 const arr = []
 useEffect(() =>{
  for (const key in clickStatus.count) {
    arr.push({ gg: key, mm: clickStatus.count[key]});
  }
  setYc(arr)
  setIndie(null)
 },[clickStatus])

 function handleClick(e) {
  const id = e.target.id
   btnIndex(id)
   setBtn(btnId)
  if (buttonRef.current.innerText == "Add to Cart") {
    checkClick((prev) => {
      return {
        ...prev,
        color:true,
       
        count: {
          ...prev.count,
          [category]: {counter:0 + 1,price:price, id:btnId,em:false,img:image} 
        },
      }

    })
    setIndie(true)
    
  }   

  if (buttonRef.current.id == e.target.id) {
    buttonRef.current.previousElementSibling.classList.remove('border-none')
    buttonRef.current.previousElementSibling.classList.add('border-2', 'border-red')
  }
  setIndie(true)
 }

 function handleIncrease(e) {
  e.stopPropagation()
  checkClick((prev) => {
    return {
     ...prev,
      count: {
        ...prev.count,
        [category]:{...prev.count[category], counter: prev.count[category].counter + 1}
      },
    }
  })
 }

 function handleDecrease(e) {
  e.stopPropagation()
  checkClick((prev) => {
    return {
     ...prev,
     count: {
      ...prev.count,
      [category]:{...prev.count[category], counter:  prev.count[category].counter !== 0 ? prev.count[category].counter - 1 : prev.count[category].counter + 1, em: clickStatus.count[category].counter - 1 !== 0 ? false : true}
    },
    }
  })


  if (buttonRef.current.id == e.target.id && clickStatus.count[category].counter - 1 == 0) {
    buttonRef.current.previousElementSibling.classList.add('border-none')
      setIndie(null)
  }
 }
 
 return(
  <button id={btnId} ref={buttonRef} className={`absolute lg:top-[63%] top-[55%] left-[24%] md:left-[19%] h-[45px] lg:left-9 rounded-3xl border-2  border-rose-300 w-[50%] lg:w-[170px] md:w-[58%]  flex items-center justify-center   ${ btn == btnId && !clickStatus.count[category].em ?  `animate-colorChange border-none gap-9` : `bg-roseFify`}` } onClick={handleClick}>{  btn == btnId && !clickStatus.count[category].em ? <> <div  className="border-2 border-roseFify rounded-full h-[18px] w-[18px] flex justify-center items-center"><img id={btnId} onClick={handleDecrease} className="w-[90%] h-[90%]" src={decrease} alt="minus symbol" /></div> <p id={btnId}>{clickStatus.count[category].counter}</p> <div id={btn}  className="border-2 border-roseFify rounded-full h-[18px] w-[18px] flex justify-center items-center" ><img id={btnId} onClick={handleIncrease} src={increase} alt="plus symbol" /></div></> : <><img  src={cartIcon} alt="add to cart icon" />Add to Cart</>}</button>
 )

 
}


