import './App.css';
function App(){
  return(
    <div className="container mt-5 w-50 ">
      <h2 className='text-center'><b>TODO APP USING REACT</b></h2>
      <div className="input-group">
        <input className="form-control"type="text"/>
        <button className="btn btn-primary">Add</button>
      </div>
      <ul className="list-group mt-4">
        <li className="list-group-item">
         <p>todo 1</p>
         <button className="btn">❌</button>
        </li>
        <li className="list-group-item">
          <p>todo 2</p>
          <button className="btn">❌</button>
        </li>
      </ul>
    </div>

  )
}

export default App;