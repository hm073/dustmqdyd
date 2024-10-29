import './App.css';
import { useReducer } from 'react';

const r4 = { count : 0 };
const r3 = ( r1, act ) => {
switch(act.type) {
case "증가" : return { count : r1.count + 1}
case "감소" : return { count : r1.count - 1}
case "리셋" : return r4;
default    : return r1;
};
};

function App() {
  const [ r1, r2 ] = useReducer ( r3, r4 );
  return(
    <section>
      <h1>카운트: { r1.count }</h1>
      <button type='button' onClick={ () => r2( { type: "증가" })}>증가</button>
      <button type='button' onClick={ () => r2( { type: "감소" })}>감소</button>
      <button type='button' onClick={ () => r2( { type: "리셋" })}>리셋</button>
    </section>
  );
}

export default App;
