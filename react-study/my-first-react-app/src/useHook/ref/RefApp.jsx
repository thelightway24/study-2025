import { useRef, useState } from "react";
function FocusInput(){
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus()
    }
    return (
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus</button>
        </>
    )
}
function RefApp() {
    /**
     * 값을 저장하지만 렌더링이 필요하지 않을 때 사용.
     * state와 달리 ref는 current 속성을 가져올 때 사용한다.
     */
    const ref = useRef(0);
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    const handleStart = () => {
        if(timerRef.current) return;

        timerRef.current = setInterval( () => {
            setSeconds((pre) => pre + 1)
        }, 1000)
        console.log('start')
    }

    const handleEnd = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        console.log('end')
    }

    return <>
    <h1>Time: {seconds}</h1>
    <button onClick={handleStart}>start</button>
    <button onClick={handleEnd}>end</button>
    <br />
    <FocusInput />
    </>
}

export default RefApp;