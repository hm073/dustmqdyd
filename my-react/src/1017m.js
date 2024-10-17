function App( props ) {
    return (
        <div>
            <h2>절친들의 수다</h2>
            <p>친구 {props.dpsdnjs}명이서 {props.xn}와 {props.tmfl}를<br/>
                배터지게 먹었다.</p>
        </div>
    );
}

const A = <App dpsdnjs= '5' xn='포도' tmfl='딸기' />;

export default A;