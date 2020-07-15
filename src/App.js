import React from 'react';
import './App.css';
import MainPage from './containers/MainPage/MainPage';


function App() {
  let mainDiv = document.getElementById('root');
  let userMetric = document.documentElement;
  mainDiv.style.height = userMetric.clientHeight > 823 ? 823 + 'px' : userMetric.clientHeight + 'px'
  mainDiv.style.width = userMetric.clientWidth + 'px'
  setTimeout(() => {
    let header = document.getElementById('header')
    let footer = document.getElementById('footer')
    footer.style.width = userMetric.clientWidth + 'px'
    header.style.width = userMetric.clientWidth + 'px'
  })
  console.log(userMetric.clientHeight, userMetric.clientWidth)
  return ( 
  <React.StrictMode>
    <div className='wrapper'>
      <MainPage />
    </div>
  </React.StrictMode>
  );
}

export default App;
