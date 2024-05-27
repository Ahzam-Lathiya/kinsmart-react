import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.jsx'
// import Table from './Table.jsx';
import Banana from './Profile.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Table /> */}
    <Banana
      person={{ 
        name: 'Matsumoto Takahari',
        imageId: 'YfeOqp2'
      }}
      size={100}
    />
  </React.StrictMode>,
)
