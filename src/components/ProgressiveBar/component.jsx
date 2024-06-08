import s from './style.module.css'

export const ProgressiveBar = ({ progress }) => {
    return (
        <div className={s.root} style={{width: `${progress}%`}} />
    )
}
