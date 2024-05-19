import React,{useState} from 'react'


export default function Textform(props) {
    const  [text, settext] = useState("");
    const handleupclick = () => {
        let newtext=text.toUpperCase()
        settext(newtext)
        props.showalert('Changed to Upper case','success')
    }
    const handleloclick = () => {
        let newtext=text.toLowerCase()
        settext(newtext)
        props.showalert('Changed to Lower case','success')
    }
    const onchangehandler = (event) =>{
        settext(event.target.value)
    }
    const handlecopy =()=>{
        navigator.clipboard.writeText(text);
        props.showalert('Text copied','success')
    }
    const handlewhitespaces=()=>{
        let newtext=text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showalert('Whitespaces handled','success')
    }
    return (
        <>
        <div className={`container text-${props.mode==="dark"?"white":"dark"}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`${props.mode==="dark"?"darkbox":""}`} style={{width:"100%"}} value={text} onChange={onchangehandler} id="mybox" rows="10"  />
            </div>
            <button disabled={text.length===0} className="btn btn-dark mx-2" onClick={handleupclick}>Remove to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2" onClick={handleloclick}>Remove to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2" onClick={handlecopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2" onClick={handlewhitespaces}>Remove Whitespaces</button>
        </div>
        <div  className={`container my-3 text-${props.mode==="dark"?"white":"dark"}`}>
            <h1>Your Text Summary</h1>
            <p>Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h3>Preview</h3>
            {text.length>0?text:"Enter text in textbox to preview it here"}
        </div>
        </>
    )
}
