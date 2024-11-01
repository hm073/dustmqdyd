import './App.css';
import {useState} from 'react';

function Header(props){
  // console.log('props',props, props.title)
  return (
    <header>
      <h1><a href="/" onClick={function(event){
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
          <ol>
            {lis}
          </ol>
        </nav>
}

function Article(i){
  console.log(i)
  return (
    <article>
        <h2>{i.a}</h2>
        {i.b}
    </article>
  )
}

function App() {
  const _mode = useState('WELCOME');
  const mode = _mode[0];
  const setMode = mode[1];
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]

  let content = null;
  if(mode === 'WELCOME') {
    content = <Article a='Welcome' b='Hello, WEB'></Article>
  } else if(mode === 'READ') {
    content = <Article a='Read' b='Hello, Read'></Article>
  }
  
  return (
    <div>
      <Header title='REACT' onChangeMode={() => {alert('Header')}}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{alert(id);}}></Nav>
      {content}
    </div>
  );
}

export default App;
