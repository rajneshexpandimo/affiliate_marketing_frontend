import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactCountUp = dynamic(() => import("react-countup"), { ssr: false });

const CountUp = ({ end }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return null;
  }
  return (
    <ReactCountUp
      duration={2.75}
      // suffix="+"
      separator=","
      start={0}
      end={end}
      enableScrollSpy
    />
  );
};
export default CountUp;
