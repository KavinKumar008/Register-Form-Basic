import React from "react";

const UsingRef = () => {
  const inputRef = useRef(null);
  const numRef = useRef(0);
  const spanRef = useRef(null);

  const increment = () => {
    numRef.current = numRef.current + 1;
    spanRef.current.innerText = numRef.current;
    // console.log(numRef.current);
  };

  const decrement = () => {
    numRef.current = numRef.current - 1;
    spanRef.current.innerText = numRef.current;

    console.log(numRef.current);
  };

  useEffect(() => {
    console.log("component rendered");
  });

  const handleFocus = () => {
    alert("added successfully");
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = "white";
    inputRef.current.style.padding = "3rem";
    inputRef.current.style.borderRadius = "2rem";
  };
  return (
    <div>
      <input type="text" ref={inputRef} className="border border-black" />
      <button onClick={handleFocus}>Click</button>
      <br />
      <button onClick={increment}>
        Add <span ref={spanRef}>0</span>
      </button>
      <button onClick={decrement}>
        Decrease <span ref={spanRef}>0</span>
      </button>
    </div>
  );
};

export default UsingRef;
