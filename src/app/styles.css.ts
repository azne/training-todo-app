import { createVar, style, globalStyle } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

const headerSize = createVar();
const footerSize = createVar();
const mainColor = createVar();
const textColor = createVar();
const subColor = createVar();
const bgColor = createVar();

globalStyle("body", {
  backgroundColor: "#EFEFEF",
});

export const root = style({
  vars: {
    [headerSize]: "64px",
    [footerSize]: "64px",
    [mainColor]: "#287FB8",
    [textColor]: "#2D2D2D",
    [subColor]: "#95A6A7",
    [bgColor]: "#EFEFEF",
  },
  minWidth: "320px",
  maxWidth: "520px",
  margin: "0 auto",
  color: textColor,
  fontSize: "16px",
});

export const header = {
  wrapper: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    height: headerSize,
    padding: "0 1em",
  }),
  title: style({
    marginBottom: "1em",
    fontSize: "0.75rem",
    fontWeight: "normal",
  }),
};

export const main = style({
  minHeight: calc.subtract("100vh", headerSize, footerSize),
  padding: "0 1em",
  "@supports": {
    "(min-height: 100dvh)": {
      minHeight: calc.subtract("100dvh", headerSize, footerSize),
    },
  },
});

export const menuBtn = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  border: `2px solid ${mainColor}`,
  borderRadius: "50%",
  backgroundColor: "transparent",
});

export const menu = {
  wrapper: style({
    position: "absolute",
    top: "3.5em",
    right: "1em",
    minWidth: "160px",
    padding: "0.5em 1.25em",
    borderRadius: "0.5rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.2)",
  }),
  label: style({
    display: "block",
    padding: "0.5em 0",
    fontSize: "0.75rem",
  }),
  checkbox: style({
    appearance: "none",
    opacity: 0,
    position: "absolute",
  }),
};

export const menuCheckIcon = style({
  display: "inline-block",
  overflow: "hidden",
  position: "relative",
  boxSizing: "border-box",
  height: "1.5em",
  width: "1.5em",
  marginRight: "0.5em",
  marginTop: "-0.25em",
  verticalAlign: "middle",
  textIndent: "200%",
  whiteSpace: "nowrap",
  transition: "all .2s ease-out",

  ":before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    backgroundColor: bgColor,
    borderRadius: "0.25rem",
    boxSizing: "border-box",
  },
  ":after": {
    content: "''",
    position: "absolute",
    top: "42%",
    left: "50%",
    width: "0.5em",
    height: "0.75em",
    border: `solid ${mainColor}`,
    borderWidth: "0 0.125em 0.125em 0",
    transform: "translate(-50%, -50%) rotate(45deg)",
    opacity: 0,
  },
  selectors: {
    [`${menu.checkbox}:checked + &:after`]: {
      opacity: 1,
    },
  },
});

export const todo = {
  wrapper: style({
    display: "flex",
    marginBottom: "1em",
  }),
  label: style({
    fontSize: "1rem",
  }),
  contents: style({
    flex: 1,
    lineHeight: 1,
  }),
  taskName: style({
    display: "block",
    width: "100%",
    marginBottom: "0.5em",
    border: "none",
    textAlign: "left",
    lineHeight: 1.4,
    fontSize: "1rem",
  }),
  taskText: style({
    display: "block",
    width: "100%",
    border: "none",
    textAlign: "left",
    lineHeight: 1.6,
    fontSize: "0.75rem",
    color: subColor,
  }),
  taskNameInput: style({
    width: "100%",
    marginBottom: "0.5em",
    borderRadius: "0.25rem",
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    lineHeight: 1.4,
    fontSize: "1rem",
    color: textColor,
    ":focus": {
      outline:`1px solid ${mainColor}`,
    },
  }),
  taskTextInput: style({
    width: "100%",
    borderRadius: "0.25rem",
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    lineHeight: 1,
    fontSize: "0.75rem",
    color: subColor,
    ":focus": {
      outline:`1px solid ${mainColor}`,
    },
  }),
};

export const todoCheckbox = style({
  selectors: {
    [`${todo.label} &`]: {
      appearance: "none",
      opacity: 0,
      position: "absolute",
    },
  },
});

export const todoCheckIcon = style({
  selectors: {
    [`${todo.label} &`]: {
      display: "inline-block",
      overflow: "hidden",
      position: "relative",
      boxSizing: "border-box",
      height: "1.5em",
      width: "1.5em",
      marginRight: "0.5em",
      marginTop: "-0.25em",
      verticalAlign: "middle",
      textIndent: "200%",
      whiteSpace: "nowrap",
      transition: "all .2s ease-out",
    },
    [`${todo.label} &:before`]: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: `1px solid ${subColor}`,
      borderRadius: "0.25rem",
      boxSizing: "border-box",
    },
    [`${todo.label} &:after`]: {
      content: "''",
      position: "absolute",
      top: "42%",
      left: "50%",
      width: "0.5em",
      height: "0.75em",
      border: `solid ${mainColor}`,
      borderWidth: "0 0.125em 0.125em 0",
      transform: "translate(-50%, -50%) rotate(45deg)",
      opacity: 0,
    },
    [`${todoCheckbox}:checked + &:after`]: {
      opacity: 1,
    },
  },
});

export const addTodoBtn = style({
  display: "flex",
  alignItems: "center",
  height: "2.5em",
  border: "none",
  backgroundColor: "transparent",
  appearance: "none",
  fontSize: "1.25rem",
  color: mainColor,
});

export const addTodoBtnIcon = style({
  display: "inline-block",
  position: "relative",
  width: "24px",
  height: "24px",
  marginRight: "0.5em",
  backgroundColor: mainColor,
  borderRadius: "50%",

  ":before": {
    content: "''",
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "16px",
    height: "1px",
    backgroundColor: "#FFFFFF",
  },
  ":after": {
    content: "''",
    display: "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "1px",
    height: "16px",
    backgroundColor: "#FFFFFF",
  },
});

export const footer = style({
  height: footerSize,
  display: "flex",
  alignItems: "center",
  padding: "0 1em",
});
