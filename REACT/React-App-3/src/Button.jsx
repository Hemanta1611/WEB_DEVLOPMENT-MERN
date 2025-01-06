function clickEventHandle(event) {
  console.log("paragraph was clicked");
  console.log(event);
};
export default function Button() {
  return (
    <div>
      <button onClick={() => console.log("button was clicked")}>
        Click Me!
      </button>
      <p onClick={clickEventHandle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
        soluta vero.
      </p>
    </div>
  );
}
