import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    console.log("Button Pressed");
  };

  return (
    <div>
      <ListGroup
        items={["red", "green", "blue"]}
        headding="Colors"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onClick={handleButtonClick} type="primary">
        My Button
      </Button>
    </div>
  );
}

export default App;
