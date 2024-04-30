import React, { useState } from "react";
import "./EightBall.css";


const EightBall = ({answers}) => {

    const [obj, setObj] = useState({msg: "Think of a Question", color: "black" })
    let randomAnswer = Math.floor(Math.random() * answers.length);

    return (
        <>
            <div className="EightBall">
                <div onClick={() => setObj(answers[randomAnswer])} className="EightBall-outerDiv" style={{backgroundColor: obj.color}}>
                    <h3>{obj.msg}</h3>
                </div>
            </div>
        </>
    );
}


export default EightBall;
