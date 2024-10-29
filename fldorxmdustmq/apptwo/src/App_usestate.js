import './App.css';
import { useState } from 'react';

function App() {
    const [c1 , c2] = useState(0);

    return (
        <div>
            <> 
                <p>----- 두번째 방법 -----</p>
            </>
            <p>카운트 : { c1 }</p>
            <button onClick = {() => c2(c1 +1)}>+1</button>
            <button onClick = {() => c2(c1 -1)}>-1</button>
        </div>
    )
};

export default App;