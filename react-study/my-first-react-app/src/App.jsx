import React, { Fragment } from "react";
import Gretting from "./Gretting";
import Destination from "./Destination";
import Container from "./Container";
import Item from "./Item";
import MailBox from "./MailBox";
import Fruit from "./Fruit";
import List from "./List";

function HelloWorld(){
  return (
    /* div 감싸지 않을 수 있다 */
    <Fragment>
      <h1>Hello World~</h1>
    </Fragment>

    /* 단축 문법 
    <>
    </>
    */
  );
}

React.createElement('h1', null, "Hello world")

function Message () {
  const name = "Alice";
  return <h1>Hello {name}</h1>
}

function CustomInput() {
  return (
  <input type="input" maxLength={5} style={{backgroundColor: "red"}} />
  );
}
function App() {
  const destination = [
    {
      place: '파리',
      description: '에펠탑과 카페가 있는 도시'
    }
  ]
  const fruits= ["Banana"];
  return (
    <>
      <div>
        <HelloWorld />
        <Message/>
        <CustomInput />
        <Gretting name="Props"/>
        <Gretting name="Test"/>

        <Container>여행 지역</Container>
        <Destination place={'파리'} description={'에펠탑과 카페가 있는도시'} />

        <Destination {...destination[0]} />
        <Destination />
      </div>

      {
        // 조건부 렌더링 Item.jsx
      }

      <Item isDone={true}/>
      <Item isDone={false}/>

      <MailBox unreadMessage={'hi'} />

      <Fruit fruits={['apple']} />
      <Fruit fruits={[]} />


      {
        fruits.length > 0 &&  (
          <Fruit fruits={fruits} />
        )
      }

      {
        // 목록 렌더링
      }
      <List />
    </>
  )
}

export default App
