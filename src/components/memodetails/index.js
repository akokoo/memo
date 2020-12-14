import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMemo, editMemo } from './../../actions';
import { generateId } from "./../../utils";
import "./memodetails.css";

const MemoDetails = () => {
    const details = useSelector(state => state.memodetails.currentMemo);
    const status = useSelector(state => state.memodetails.status);
    const inputTitle = useRef();
    const inputDescription = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(details).length) {
            inputTitle.current.value = details.title;
            inputDescription.current.value = details.description;
        } else {
            inputTitle.current.value = '';
            inputDescription.current.value = '';
            if (status === 'add') {
                inputTitle.current.focus();
            }
        }
    })

    const changeData = () => {
        if (status==="add") {
            dispatch(addMemo(
                {
                    title: inputTitle.current.value,
                    description: inputDescription.current.value,
                    id: generateId()
                }
            ));
        }
        if (status==='edit') {
            dispatch(editMemo(
                {
                    title: inputTitle.current.value,
                    description: inputDescription.current.value,
                    id: details.id
                }
            ))
        }
    }
    return (
        <div>
            <div className="title">
                <textarea 
                    ref={inputTitle} 
                    rows="3" 
                    placeholder="Title"
                    disabled={status==='show' || status ==="init"}
                    onChange={changeData}
                />
            </div>
            <div className="description">
                <textarea 
                    ref={inputDescription} 
                    rows="10"
                    placeholder="Description"
                    disabled={status==='show' || status ==="init"}
                    onChange={changeData}
                />
            </div>
        </div>
    )
}
export default MemoDetails;