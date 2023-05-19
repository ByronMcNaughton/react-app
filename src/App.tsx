import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    setAlertVisibility(true);
  };
  const handleAlertClose = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      <ListGroup
        items={["red", "green", "blue"]}
        headding="Colors"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={handleAlertClose}>Button made alert</Alert>
      )}
      <Button onClick={handleButtonClick} type="primary">
        My Button
      </Button>
    </div>
  );
}

export default App;
