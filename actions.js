const SELECT_SET = 'SELECT_SET';
const SELECT_COLOR = 'SELECT_COLOR';
const UNSELECT_COLOR = 'UNSELECT_COLOR';

function selectColor(color) {
    return { type: SELECT_COLOR, color: color}
}

function unselectColor(color) {
    return { type: UNSELECT_COLOR, color: color}
}

function selectSet(set) {
    return { type: SELECT_SET, set: set}
}