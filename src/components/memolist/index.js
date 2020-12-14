import { useSelector } from "react-redux";
import Memo from "./../memo";;

const Memolist = () => {
    const memoList = useSelector(state => state.memolist);
    if (memoList.length) {
        let memoArray = memoList.map(memo => {
            return <Memo key={memo.id} settings={memo}/>
        });
        return (
            <div>{memoArray} </div>
        );
    } else {
        return (
        <div>list empty</div>
        );
    }
}
export default Memolist;