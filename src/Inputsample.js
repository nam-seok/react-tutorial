import React , {useState} from 'react'

function Inputsample() {
    const [text, setText] = useState('')
    const onChange=(e)=>{
        setText(e.target.value)
    }

    const onReset =()=>{
        setText('')
    }
    return(
        <div>
            <input value={text} onChange={onChange} placeholder={'입력하세요'}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :{text} </b>
            </div>
        </div>
    )
}

export default Inputsample;