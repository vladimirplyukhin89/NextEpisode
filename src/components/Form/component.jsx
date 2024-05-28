import { useReducer } from 'react';

const initialState = {
    name: '',
    message: 'It is time to learn',
}

const reducer = (initialState, { type, payload } = {}) => {
    switch (type) {
        case 'changeName':
            return {
                ...initialState,
                name: payload,
            };
        case 'changeMessage':
            return {
                ...initialState,
                message: payload,
            };
        case 'reset':
            return initialState;
        default:
            return initialState;
    }
}

export const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
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
        </div>
    )
}
