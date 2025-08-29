import { useReducer, useState } from "react"
const inital = {count : 0};
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREASE': {
            return {
                count : state.count + 1
            }
        }
        case 'DECREASE': {
            return {
                count : state.count - 1
            }
        }
        default : {
            throw new Error("Invalid Type " + action.type)
        }
    }
}

function ReducerApp() {
    /**
     * 1. 초기 상태를 정의한다.
     */
    const[state, dispatch] = useReducer(reducer, inital);

 
    //useReducer를 사용하는 이유
    //복잡한 형태
    const product = {
        name: '99con',
        price: 30000,
        category: {
            id: 1
        }
    }

    // 업데이트 많은 경우
    const [list, setList] = useState([])
    function handleCreate(input){
        setList((pre) => pre.concat(input))
    }

    function hanldeUpdate(input){
        setList(pre => pre.map((i) => (i.id === input.id ? input : i)))
    }

    return (<>
        <h1>count: {state.count}</h1>
        <button onClick={() => dispatch({type: "DECREASE"})}>decrease</button>
        <button onClick={() => dispatch({type: "INCREASE"})}>increase</button>
    </>
    )
}

export default ReducerApp;