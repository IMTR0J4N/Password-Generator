import "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";
import { generatePassword } from "./utils/generatePassword";

function App() {
  return (
    <Box className="h--screen w--screen bg--black--light--1 d--flex justify--center App">
      <Box className={"w--4-12 h--7-12 bg--black--light--2 p--2"}>
        <Button style={{ textTransform: "uppercase", fontFamily: "Poppins, sans-serif" }} onClick={() => console.log(generatePassword(10, { lowercase: true, uppercase: true, number: true, symbols: true }))}>generate →</Button>
      </Box>
    </Box>
  )
}

export default App
