import React, { useEffect, useState } from "react";

// Desktop Components
import Header2560 from "./Desktop/2560";
import Header1440 from "./Desktop/1440";
import Header1024 from "./Desktop/1024";
import Header768 from "./Desktop/768";

// Mobile Components
import Header425 from "./Mobile/425";
import Header375 from "./Mobile/375";
import Header320 from "./Mobile/320";

export default function DUI() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop
  if (width >= 2560) return <Header2560 />;
  if (width >= 1440) return <Header1440 />;
  if (width >= 1024) return <Header1024 />;
  if (width >= 768) return <Header768 />;

  // Mobile
  if (width >= 425) return <Header425 />;
  if (width >= 375) return <Header375 />;
  return <Header320 />; // below 375
}
