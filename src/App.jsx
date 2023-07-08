import ProgressBar from "./components/ProgressBar"
import CopyButton from "./components/CopyButton"
import "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";
import { generatePassword } from "./utils/generatePassword";

function App() {
  const lala = "my name is lala lalalalala"

  return (
    <>
      <ProgressBar value="30" max={60}></ProgressBar>
    </>
    <Box className="h--screen w--screen bg--black--light--1 d--flex justify--center App" />
      <Box className={"w--4-12 h--7-12 bg--black--light--2 p--2"} />
        <Button style={{ textTransform: "uppercase", fontFamily: "Poppins, sans-serif" }} onClick={() => console.log(generatePassword(10, { lowercase: true, uppercase: true, number: true, symbols: true }))} />generate →
      <CopyButton />
  )

}

export default App

