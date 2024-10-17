import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";

export default function HomeTab() {
  const [thisIsAState, setThisIsAState] = useState(1);

  console.log("component is loaded");
  let notAState = 1 + thisIsAState;
  const handleIncrement = () => {
    notAState += 1;
    console.log(notAState);
    setThisIsAState(thisIsAState + 1);
  };
  useEffect(() => {
    console.log("run once but twice bcoz of the strict mode");
  }, [notAState]);
  return (
    <main>
      <h1>This is Home TAB</h1>
      <CustomButton variant="success" onClick={handleIncrement}>
        increment
      </CustomButton>
      <CustomButton variant="warning">Not a State {notAState}</CustomButton>
      <CustomButton variant="danger">State {thisIsAState}</CustomButton>
      <CustomButton>Click me!</CustomButton>
    </main>
  );
}
