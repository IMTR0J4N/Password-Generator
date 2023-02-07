import CopyButton from "./components/CopyButton"

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <CopyButton onClick={() => { navigator.clipboard.writeText(this.state.textToCopy) }}></CopyButton>
    </>
  )
}

export default App
