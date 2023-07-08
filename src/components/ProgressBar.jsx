import "./ProgressBar.css"

export default function ProgressBar({ value, max, ...props }) {
    return (
        <input type="range" className="progress--green"></input>
    )
}