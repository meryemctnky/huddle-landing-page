import { Title, Content, Button, Header, Hero, Icons } from './components';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <Hero />
        <section className='content'>
          <Title />
          <Content />
          <Button />
        </section>
      </main>
      <Icons />
    </div>
  );
}

export default App;
