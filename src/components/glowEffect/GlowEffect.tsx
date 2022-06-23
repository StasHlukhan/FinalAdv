import React from 'react'
interface IProps {
	children?:React.ReactNode;
}
var isFirst = true
function GlowEffect(props:IProps) {
    const  [Height,setHeight]= React.useState([0,0])
    const [Ref,setcurrentRef] = React.useState()
   const setRef=(r:any)=>{
       if (!isFirst)
       return;
       isFirst=false
       setcurrentRef(r)
    setHeight([r.offsetHeight,r.getBoundingClientRect().top])   
   }
    const[gloweffect,setgloweffect]= React.useState('linear-gradient(90deg,rgba(0,0,0,1) 15%, rgba(255,255,255,0)50%, rgba(0,0,0,1) 85%')
    const ChangeGlowEffect =(e:any)=>{
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left;
        e.relatedTarget = null
        setgloweffect(`linear-gradient(90deg,rgba(19,19,19,1) ${x/e.target.offsetWidth*100-35}%,rgba(255,255,255,0)${x/e.target.offsetWidth*100}%, rgba(19,19,19,1) ${x/e.target.offsetWidth*100+35}%`) 
    }
  return (
    <div ref={r=>(setRef(r))} onMouseMove={ChangeGlowEffect} style={{background:gloweffect}}>
        {props.children}
        <div style={{background:gloweffect,width:'1800px',height:'872px',position:'absolute',top:'10px',zIndex:1,marginTop:'70px'}}></div>
    </div>
  )
}

export default GlowEffect