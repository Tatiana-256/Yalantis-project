import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

interface IPortal {
  children: ReactNode;
  className?: string;
  el?: string;
}

const Portal: React.FC<IPortal> = ({
  children,
  className = "root-portal",
  el = "div",
}) => {
  const [container] = useState(document.createElement(el));

  container.classList.add(className);

  useEffect(() => {
    document.body.appendChild(container);
    container.setAttribute("class", styles.wrapper);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.removeChild(container);
      document.body.style.overflow = "auto";
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;
