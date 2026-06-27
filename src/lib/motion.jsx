import React from "react";

const motionProps = new Set([
  "animate",
  "exit",
  "initial",
  "layoutId",
  "transition",
  "variants",
  "viewport",
  "whileHover",
  "whileInView",
  "whileTap"
]);

function cleanProps(props) {
  return Object.fromEntries(Object.entries(props).filter(([key]) => !motionProps.has(key)));
}

export const motion = new Proxy(
  {},
  {
    get: (_, tag) =>
      React.forwardRef(function MotionElement(props, ref) {
        return React.createElement(tag, { ...cleanProps(props), ref }, props.children);
      })
  }
);

export function AnimatePresence({ children }) {
  return children;
}

export function useScroll() {
  return { scrollYProgress: 1 };
}

export function useSpring(value) {
  return value;
}
