import './App.css';
import CountriesTables from './CountriesTables';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <>
     <div className='d-flex justify-content-center align-item-center'>
      <h2>React Datatable</h2>
     </div>
     <CountriesTables/>
    </>
  );
}

export default App;
