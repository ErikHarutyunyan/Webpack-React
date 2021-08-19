// No need to import "react" just for JSX in React 17+
import Recipes from './Recipes';
import harLog from '../images/harutyunyanLogo.png';
import armSymb from '../images/armSymb.svg';

import '../styles/index.scss';

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          <h1>Oh Hello, React.</h1>
          <img src={harLog} alt='harLog' width='250' />
          <img src={armSymb} alt='armSymb' width='250' />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
