import { useDispatch, useSelector } from "react-redux";
import { deleteMemo, setCurrentMemo } from "./../../actions";
import "./deletebutton.css";

const DeleteButton = props => {

    const { id } = props;
    const currentMemo = useSelector(state => state.memodetails.currentMemo);
    const dispatch = useDispatch();
    
    const _deleteMemo = function() {
        dispatch(deleteMemo(id));
        if (currentMemo.id === id) {
            dispatch(setCurrentMemo({}, 'init'))
        }
    };

    return (
        <div className='delete-button'
            onClick={_deleteMemo}
            title="delete memo"
        >
            &times;
        </div>
    );
}

export default DeleteButton;