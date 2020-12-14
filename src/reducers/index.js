const initialState = {
    memolist: [
        {
            id: "000000000000001",
            title: "ИП тест",
            description: "text"
        },
        {
            id: "000000000000002",
            title: "Как быстро обновлять macOS через \"Терминал\", не прерывая работу",
            description: "text"
        },
    ],
    memodetails: {
        currentMemo: {},
        status: "init"
    }
    
}
export default function reducers (state = initialState, action) {
    switch (action.type) {
        case 'setCurrentMemo': {
            console.log(action.status)
            return {
                ...state,
                memodetails: {
                    currentMemo: action.data,
                    status: action.status
                }
            }
        }
        case 'addMemo': {
            return {
                ...state,
                memolist: [ ...state.memolist, action.data],
                memodetails: {
                    currentMemo: action.data,
                    status: action.status
                }
            }
        }
        case 'editMemo': {
            return {
                ...state,
                memolist: state.memolist.map(memo => {
                    if (memo.id === action.data.id) {
                        return {
                            ...memo, ...action.data
                        }
                    } else {
                        return memo;
                    }
                }),
                memodetails: {
                    currentMemo: action.data,
                    status: action.status
                }
            }
        }
        case 'deleteMemo': {
            console.log("state", state, action.id)
            return {
                ...state,
                memolist: state.memolist.filter(memo => {
                    return memo.id !== action.id;
                })
            }
        }
        default: {
            return state;
        }
    }
}