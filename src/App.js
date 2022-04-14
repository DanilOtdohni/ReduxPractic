import './App.css';
import {useDispatch, useSelector} from "react-redux";


function App() {

    const disaptch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash);

    const addCash = (cash) => {
        disaptch({type:'replenish_CASH', payload: cash})
    }
    const getCash = (cash) => {
        disaptch({type:'GET_CASH', payload: cash})
    }


  return (
    <div className="App">
        <div style={{fontSize: '20px'}}>{cash}</div>
        <div className="Btns" style={{display:"flex"}}>
            <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
            <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        </div>
    </div>
  );
}

export default App;
