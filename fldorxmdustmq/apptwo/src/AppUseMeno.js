import { useState , useMemo} from 'react';

function App(){
  const [ n1 , n11 ] = useState( 0 );
  const x = useMemo(  ()=> { return n1 * n1 } , [ n1 ] );
  return(
    <section>
      <h1>useMemo Hook을 이용하여 제곱근 구하기</h1>
      <input type='number' value={ n1 } onChange={ e => n11( e.target.value ) } />
      <p>제곱근 결과: { x }</p>
    </section>
  );
}

export default App;