import React, { useState, useEffect } from "react";

interface AppProps {
  guestName?: string;
}

const App: React.FunctionComponent<AppProps> = ({
  guestName = "Customer",
}: AppProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div>
      {`Time since start: ${count}`}
      <div>{`Welcome to React App ${guestName} !`}</div>
    </div>
  );
};

export default App;
