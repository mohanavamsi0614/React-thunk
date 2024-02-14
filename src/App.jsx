import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import fetch_data from './redux/feactacsion'

function App() {
  const state=useSelector((state)=>state)
  const dispatch=useDispatch()
  return (
    <>
     <button onClick={()=>dispatch(fetch_data())}>fetch data</button>
     {state.map((i,ind)=>{
      return(
      <div key={ind} style={{border:"1px solid white;", margin:"10px"}}><p>{i.name}</p>
      <p>{i.email}</p>
      </div>)
     })}
    </>
  )
}

export default App
