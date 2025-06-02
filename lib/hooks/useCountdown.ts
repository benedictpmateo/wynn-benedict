import { useCallback, useEffect, useState } from "react";

const useCountdown = (initialCountdown: number) => {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [isCounting, setIsCounting] = useState(false);

  const startCountdown = useCallback(() => {
    setCountdown(initialCountdown);
    setIsCounting(true);
  }, [initialCountdown]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isCounting && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [countdown, isCounting]);

  return {
    countdown,
    isCounting,
    startCountdown,
  };
};

export default useCountdown;
