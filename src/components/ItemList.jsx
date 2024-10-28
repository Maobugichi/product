export default function ItemList({children,icon}) {
 return(
    <ul className="lg:flex lg:flex-row  w-full lg:justify-between flex flex-col gap-3">
      {children}
    </ul>
    ) 
    
}