import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/index'


function App(props) {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App-header">
      <h2>{count}</h2>
      <span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </span>
    </div>
  )
}



// function mapStateToProps(state) {

//   return {
//     count: state
//   }
// }

// const mapDispatchToProps = {
//   oranges: increment,
//   apples: decrement
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App