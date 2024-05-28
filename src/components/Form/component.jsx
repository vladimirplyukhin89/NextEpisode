import { useReducer } from 'react';

const INITIAL_STATE = {
    name: '',
    message: 'It is time to learn',
}

const reducer = (INITIAL_STATE, { type, payload } = {}) => {
    switch (type) {
        case 'changeName':
            return {
                ...INITIAL_STATE,
                name: payload,
            };
        case 'changeMessage':
            return {
                ...INITIAL_STATE,
                message: payload,
            };
        case 'reset':
            console.log(INITIAL_STATE);
            return {
                name: '',
                message: ''
            };
        default:
            return INITIAL_STATE;
    }
}

export const Form = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
   
    return (
        <div>
            <div>
                <label htmlFor={'name'}>
                    Name:
                    <input
                       type={'text'}
                       value={state.name}
                       onChange={(event) => dispatch({ type: 'changeName', payload: event.target.value })} id={'name'} />
                </label>
            </div>
            <p>{state.name}</p>
            <div>
                <label htmlFor={'message'}>
                    Message:
                    <textarea
                        value={state.message}
                        id={'message'}
                        onChange={(event) => dispatch({ type: 'changeMessage', payload: event.target.value })}
                    ></textarea>
                </label>
            </div>
            <p>{state.message}</p>
            <button type={'button'} onClick={() => dispatch({ type: 'reset' })}>Save</button>
        </div>
    )
}
