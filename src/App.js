import './App.css';
import Memolist from "./components/memolist";
import MemoDetails from "./components/memodetails";
import AddNewMemo from "./components/addnewmemo";

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <AddNewMemo />
        <Memolist />
      </div>
      <div className="memo-details-container">
        <MemoDetails />
      </div>
    </div>
  );
}

export default App;
