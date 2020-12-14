import { setCurrentMemo } from "./../../actions";
import { useDispatch } from 'react-redux';
import "./addnewmemo.css";

const AddNewMemo = () => {
    const dispatch = useDispatch();
    const addNewMemo = () => {
        dispatch(setCurrentMemo({}, 'add'))
    }
    return (
        <div className="add-button-container">
            <div className="add-button" onClick={addNewMemo} title='addNewMemo'>+</div>
        </div>
    )
}
export default AddNewMemo;