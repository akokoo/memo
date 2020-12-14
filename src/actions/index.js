export function setCurrentMemo (data, status) {
    return {
        type: 'setCurrentMemo',
        data,
        status
    }
}

export function addMemo (data, status = "edit") {
    return {
        type: 'addMemo', 
        data,
        status
    }
}
export function editMemo (data, status = "edit") {
    return {
        type: 'editMemo',
        data, 
        status
    }
}
export function deleteMemo (id)  {
    return {
        type: 'deleteMemo',
        id
    }
}