import { useState , useEffect } from 'react';

const Api = ()=> {
    const [ d1 , d11 ] = useState( null );
    useEffect( ()=>  {
        fetch('https://jsonplaceholder.typicode.com/todos') /*요청*/
        .then( i => i.json() ) /*JSON데이터를 JS객체로 변환*/
        .then( d1 => d11( d1 ) );/*응답완료후 실행할 코드*/
    } , []);
    return(
        <>
          {
              d1 && d1.map(  i => {
                return  <p key={ i.id }><b style={{color:'orange'}}>{i.id}_</b> { i.title }_ <i style={{color:'yellowgreen'}}>{ String(i.completed) }</i></p>
              } )
          }
        </>
    );
}

export default Api;