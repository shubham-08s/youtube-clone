export const Videocard = ({src,icon, title , channel , views ,time})=>{
    return <div className="p-5  cursor-pointer">

        <img className=" w-full   rounded-xl" src={src}></img>
        <div className="text-white grid grid-cols-9 ">
            <div className="col-span-1 pt-3">
            <img className="h-10 rounded-full" src={icon}></img></div>

           <div className="col-span-8 pt-3  text-base">

            <div className="text-[16px] font-medium leading-[22px] text-white font-['Roboto'] ">{title} </div>
            <div className="flex justify-start text-gray-400 ">
                <div className=" font-normal pr-2 hover:text-white "> {channel}</div >
             <div className="pt-1 pr-1">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 21" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg></div>
                <div className="pr-3 text-base">{views} </div>

                <div> {time }</div>

            </div>
           </div>
           
        </div>
        
    </div>
    

}