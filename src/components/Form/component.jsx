import { useReducer } from 'react';
import { Rating } from "../Rating/component.jsx";

const INITIAL_STATE = {
    name: '',
    message: '',
}

const reducer = (state, { type, payload } = {}) => {
    switch (type) {
        case 'setName':
            return {
                ...state,
                name: payload,
            };
        case 'setMessage':
            return {
                ...state,
                message: payload,
            };
        case 'reset':
            return INITIAL_STATE;
        default:
            return state;
    }
}

export const Form = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    const handleValueChange = (event, type) => dispatch({ type: type, payload: event.target.value });
    
    return (
        <div className='form'>
            <p>Form</p>
            <div className='form-label'>
                <label htmlFor='name'>
                    Name:
                    <input
                        type={'text'}
                        value={state.name}
                        id={'name'}
                        onChange={(event) => handleValueChange(event,'setName')}
                    />
                </label>
                <p>{state.name}</p>
            </div>
            
            <div className='form-label'>
                <label htmlFor='message'>
                    Message:
                    <textarea
                        value={state.message}
                        id={'message'}
                        onChange={(event) => handleValueChange(event,'setMessage')}
                    ></textarea>
                </label>
                <p>{state.message}</p>
            </div>
            
            <Rating />
            
            <button
                type='button'
                onClick={() => dispatch({ type: 'reset' })}
            >Save</button>
        </div>
    )
}
