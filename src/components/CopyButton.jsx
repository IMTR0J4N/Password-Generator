export default function CopyButton() {
    const lala = "yeah boiiiii"
    return (
        <img src="icon-copy.svg" onClick={() => { navigator.clipboard.writeText(lala) }}></img>
    )


}