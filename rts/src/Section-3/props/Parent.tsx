import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("click")}>
      asdf
    </ChildAsFC>
  );
};

export default Parent;
