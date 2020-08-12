import React , {useState,useRef} from 'react'

function Inputsample() {
    const [text, setText] = useState({
        name:'',
        nickname:''
    })

    const nameInput = useRef();

    const {name , nickname} = text

    const onChange=(e)=>{
        console.log(e.target)
        const {name , value} = e.target
        setText({
            ...text,
            [name]:value
        })
}

    const onReset =()=>{
        setText({
            name:'',
            nickname:''
        })

        nameInput.current.focus();
    }
    return(
        <div>
            <input name="name" value={name} onChange={onChange} placeholder={'입력하세요'} ref={nameInput}/>
            <input name="nickname" value={nickname} onChange={onChange} placeholder={'닉네임을 입력하세요'}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :{name} {nickname !=='' ? <>({nickname})</> : '' } </b>
            </div>
        </div>
    )
}

export default Inputsample;