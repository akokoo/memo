import { useDispatch } from "react-redux";
import { cropText } from "./../../utils";
import { setCurrentMemo } from "./../../actions";
import EditButton from "./../editbutton";
import DeleteButton from "./../deletebutton";
import "./memo.css";

const Memo = (props) => {
    const {id, title} = props.settings;
    const dispatch = useDispatch();
    const openDetails = () => {
        dispatch(setCurrentMemo(props.settings, 'show'))
    }
    return (
        <div className="memo-container">
            <div className="memo-title"
                onClick={openDetails}
            >
                {cropText(title)}
            </div>
            <div className="memo-button-container">
                <div className="settings-button">
                    <div className="settings-container">
                        <EditButton details={props.settings} />
                        <DeleteButton id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Memo;