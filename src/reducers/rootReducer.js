import { BLACK, BLUE, WHITE } from '../actions/actionTypes';

const INITIAL = { backgrounds: {backgroundColor: 'white', color: 'black'} }

const rootReducer = (state=INITIAL, action) => {
    const { backgroundColor, color } = (action.payload.backgrounds) || (state.backgrounds);
    switch (action.type) {
        case WHITE:
            return {...state, backgrounds: {backgroundColor, color}};
        case BLACK:
            return {...state, backgrounds: {backgroundColor, color}};
        case BLUE:
            return {...state, backgrounds: {backgroundColor, color}};
        default:
            return state;
    }
}

export default rootReducer;