import React ,{useState}from 'react'

export default function TextForm(props) {
let handleUpClick =() =>{
   //console.log("upper case clicked" + text)
   let newText = text.toUpperCase();
   setText(newText)
}
let handleLoClick =() =>{
    //console.log("upper case clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
 }
 
let handleReClick =() =>{
    //console.log("upper case clicked" + text)
    let newText = text.split("").reverse().join("");
    setText(newText)
 }
 let handleCopy =() =>{
  //console.log("upper case clicked" + text)
  var text = document.getElementById("myBox")
 text.select();
  navigator.clipboard.writeText(text.value)
}
   const  handleOnChange = (event) =>{
   // console.log("On change");
    setText(event.target.value)
   }
   const [text, setText] = useState(" ");
   
  return (
    <>
    <div className="container"style={{color:'dark'?'white':'#042743'}} >
  <h1 style= {{color: props.mode ==='dark'?'white':'#042743'}}>{props.heading}</h1>
  <div className="mb-3">
 
    <textarea className="form-control" value={text} onChange={handleOnChange} 
    style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',
    color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
  </div>
  
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase </button>
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase </button>
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleReClick}>Convert to Reverse </button>
  <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text </button>

  </div>
  <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
  <h2> Your text summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length !==0}).lenght} 
  words and {text.length} characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Mintues read</p>
  <h2> Preview</h2>
  <p>{text.lenght>0?text :"enter something in the textbox above to preview "}</p>
  </div>

  </>
  )
}
