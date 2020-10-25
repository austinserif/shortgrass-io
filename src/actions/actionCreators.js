import { BLACK, BLUE, WHITE } from './actionTypes';

const blackBackground = () => {
    return {
        type: BLACK,
        payload: {
            backgroundColor: 'black',
            color: 'white'
        }
    }
}

const whiteBackground = () => {
    return {
        type: WHITE,
        payload: {
            backgroundColor: 'white',
            color: 'black'
        }
    }
}

const blueBackground = () => {
    return {
        type: BLUE,
        payload: {
            backgroundColor: 'blue',
            color: 'white'
        }
    }
}

export { blackBackground, blueBackground, whiteBackground };