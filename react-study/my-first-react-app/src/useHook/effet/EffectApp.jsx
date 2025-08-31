import { useEffect, useRef, useState } from "react";

function Basic (){
    /**
     * 사이드 이펙트가 일어나는 함수, 의존성 배열을 입력 받음.
     */
    useEffect( () => {
        console.log("mount")
        /**
         * console 로그가 2개 찍히는 이유는 strictMode가 활성되어있기 때문
         * 앱의 잠재적 문제를 확인하는 모드로 렌더링이 모두 2번씩 수행된다.
         */
    })
}

function Update() {
    /**
     * 인자는 state와 props에만 반응한다. useRef는 반응하지 않는다.
     */
    const [state, setState] = useState(0)
    const ref = useRef(0);
    useEffect( () => {
        console.log("update", state)
    }, [state])
    return <>
        <h1>state: {state}</h1>
        <button onClick={() => setState((pre) => pre + 1)}>Click</button>
        <button onClick={() => ref.current + 1}>refClick</button>
    </>
}


/**
 * Clean Up 함수
 * 컴포넌트가 언마운트되거나 의존성이 변경되기 전에 정리하는 작업
 * 
 * useEffect 내부에서 반환하는 함수
 */
function CleanUp() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timerId = setInterval( () => {
            setSeconds((pre) => pre + 1);
        }, 1000)
        return () => {
            console.log("clean");
            clearInterval(timerId);
        }
    }, [])

    return <>
        Seconds: {seconds}
    </>
}


function EffectApp () {
    const [isShow, setIsShow] = useState(false)
    return <>
        <Basic />
        <Update />
        <br />
        {
          isShow && <CleanUp /> 
        }
        
        <button onClick={() => setIsShow((pre) => !pre)}>click</button>
    </>
}

export default EffectApp