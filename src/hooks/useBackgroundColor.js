import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blackBackground, blueBackground, whiteBackground } from '../actions/actionCreators';
import { BLUE, BLACK, WHITE }

const useBackgroundColor = () => {

    const dispatch = useDispatch();

    const { backgroundColor, color } = useSelector(v => (v.backgrounds));

    const { bgColor, setBgColor } = useState(backgroundColor);

    const { clr, setColor } = useState(color);

    const updateColors = ( actionCreator ) => {

        () => (dispatch(actionCreator));

        setBgColor();
        setColor(color);
    }

    return [ bgColor, clr, updateColors ];
}