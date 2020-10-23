import { BLACK, BLUE, WHITE } from '../actions/actionTypes';

const INITIAL = { backgrounds: { backgroundColor: 'white', color: 'black' } }

const rootReducer = (state=INITIAL, action) => {
    switch (action.type) {
        case WHITE:
            return { ...state, backgrounds: { backgroundColor: action.payload.backgroundColor, color: action.payload.color } };
        case BLACK:
            return { ...state, backgrounds: { backgroundColor: action.payload.backgroundColor, color: action.payload.color } };
        case BLUE:
            return { ...state, backgrounds: { backgroundColor: action.payload.backgroundColor, color: action.payload.color } };
        default:
            return state;
    }
}

export default rootReducer;