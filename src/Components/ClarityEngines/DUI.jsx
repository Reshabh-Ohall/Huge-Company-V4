import { lazy, Suspense, useEffect, useState } from "react";

const DesktopClarityEngines = lazy(() => import("./Desktop/ClarityEngines"));
const TabletClarityEngines  = lazy(() => import("./Tablet/ClarityEngines"));
const MobileClarityEngines  = lazy(() => import("./Mobile/ClarityEngines"));

export default function DUI() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let Component;

  if (width >= 769) {
    Component = DesktopClarityEngines;
  } else if (width >= 426 && width <= 768) {
    Component = TabletClarityEngines;
  } else {
    Component = MobileClarityEngines;
  }

  return (
    <Suspense fallback={<></>}>
      <Component />
    </Suspense>
  );
}
