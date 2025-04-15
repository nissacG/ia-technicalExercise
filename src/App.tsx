import { Button } from "./components/ui/button"

function App() {

  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={() => alert("Hello World")}>Click me</Button>
    </div>
  )
}

export default App
