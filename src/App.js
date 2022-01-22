import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='name-container'>
        <h1 className='name-text'>Taylor B. Curry 🇺🇸 🇮🇹</h1>
        <p className='info-text'>Melbourne, Australia</p>
      </div>
      <div className='body-container'>
        <p className='body-text'>
          Currently working on big projects at <a href='' target='_blank' className='link'>Accenture</a>
          , but I recently shipped a few small ones of my own: <a href='' target='_blank' className='link'>Here Before A Million</a> and <a href='' target='_blank' className='link'>Peggy</a>.
        </p>
      </div>
      <div className='link-container'>
        <ul className='link-list'>
          <li className='link-item'>
            <a href='' target='_blank' className='link'>Email</a>
          </li>
          <li className='link-item'>
            <a href='' target='_blank' className='link'>Twitter</a>
          </li>
          <li className='link-item'>
            <a href='' target='_blank' className='link'>LinkedIn</a>
          </li>
          <li className='link-item'>
            <a href='' target='_blank' className='link'>GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;