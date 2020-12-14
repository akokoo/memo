import { useDispatch} from "react-redux";
import { editMemo } from "./../../actions";
import "./editbutton.css";

const EditButton = props => {

    const { details } = props;
    const dispatch = useDispatch();

    const _editMemo = () => dispatch(editMemo(details));

    return (
        <div className="edit-button"
            onClick={_editMemo}
            title="edit memo"
        >
            &#9998;
        </div>
    );
}

export default EditButton;