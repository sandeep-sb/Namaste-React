import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);

  // check if online
  useEffect(() => {
    addEventListener("online", () => {
      setOnline(true);
    });

    addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  // boolean value
  return online;
};

export default useOnlineStatus;
