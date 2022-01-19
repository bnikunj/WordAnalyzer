import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const [count,setCount] = useState(0);
    
    const HandleToClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    
    const HandleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    
    const HandleChange = (event) => {
        setText(event.target.value);
    }
    
    const countClick = () => {
        setCount(count + 1);
    }
    
    const HandleToClear = () => {
        setText("");
        props.showAlert("Clear Text","success");
    }
    
    const HandleToCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text","success");
    }
    
    const HandleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space","success");
    }
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <div className='mb-3'>
                        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'rgb(57 62 68)':'white',color: props.mode==='dark'?'white':'black'}} onChange={HandleChange} id="myBox" rows="6"></textarea>
                    </div>
                    <button className="btn btn-primary my-3 mx-2" onClick={HandleToClick} type="submit">Covert into UPPERCASE</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={HandleLowClick} type="submit">Covert into LowerCase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={HandleToClear} type="submit">Clear</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={HandleToCopy} type="submit">CopyText</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={HandleExtraSpace} type="submit">Remove Extra Space</button>
                </div>
                <h3>Text Summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text : "Enter something in the textbox above to preview it here"}</p>
                <br></br><hr></hr>
                <div>
                    <button className='btn btn-primary my-3' onClick={countClick}>Clicked Me</button><br></br>  
                    <p>Clicked Me {count} times.</p>
                </div>
            </div>
            
        </>
    )
}
