function App( i ) {
    return (
        <h2> {i.dlfma}에 가고 싶다. </h2>
    );
}
//App라는 이름의 함수에 i라는 매개변수가 있음.

const A = <App dlfma="집"/>;
// App라는 함수를 불러와서 dlfma이라는 변수명(App 해당하는 변수명)에 '집'을 넣는다는 변수 A

export default A;
//그 변수 A를 내보내야 전부 나오고 함수명을 내보내면 A라는 값이 안 나감