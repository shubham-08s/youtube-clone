import { Videocard } from "./Videocard"
const VIDEO = [
{icon:'./beast.jpg' ,
    src:'./mrbeast.jpg', 
    title:"7 Days Stranded in The Arctic",
    channel:"MrBeast", 
    views:'55K',
    time:"5h ago"},
{icon:'./beast.jpg' ,
    src:'./mrbeast.jpg', 
    title:"7 Days Stranded in The Arctic",
    channel:"MrBeast", 
    views:'55K',
    time:"5h ago"},
{icon:'./beast.jpg' ,
    src:'./mrbeast.jpg', 
    title:"7 Days Stranded in The Arctic",
    channel:"MrBeast", 
    views:'55K',
    time:"5h ago"},
{icon:'./beast.jpg' ,
    src:'./mrbeast.jpg', 
    title:"7 Days Stranded in The Arctic",
    channel:"MrBeast", 
    views:'55K',
    time:"5h ago"},
{icon:'./beast.jpg' ,
    src:'./mrbeast.jpg', 
    title:"7 Days Stranded in The Arctic",
    channel:"MrBeast", 
    views:'55K',
    time:"5h ago"},
{icon:'./beast.jpg' ,
    src:'./mrbeast.jpg', 
    title:"7 Days Stranded in The Arctic",
    channel:"MrBeast", 
    views:'55K',
    time:"5h ago"}]

export const Videogrid = ()=> {
   return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {VIDEO.map(video => <div>
   <Videocard icon={video.icon} src={video.src}  title={video.title} channel={video.channel} views={video.views} time={video.time}  ></Videocard>
        
    </div>)}
   </div>
}