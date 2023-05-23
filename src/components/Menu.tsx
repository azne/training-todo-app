import React, { useState, useRef, useEffect, useCallback } from "react";

import * as styles from "../app/styles.css";

import type { MouseEvent } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);

    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, []);

  const handleOutSideClick = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleChecked = useCallback(() => {
    setIsClicked(!isClicked);
  }, [isClicked]);

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleMenu} className={styles.menuBtn}>
        <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.375 2.16663C4.375 3.20216 3.53553 4.04163 2.5 4.04163C1.46447 4.04163 0.625 3.20216 0.625 2.16663C0.625 1.13109 1.46447 0.291626 2.5 0.291626C3.53553 0.291626 4.375 1.13109 4.375 2.16663ZM4.375 10.5C4.375 11.5355 3.53553 12.375 2.5 12.375C1.46447 12.375 0.625 11.5355 0.625 10.5C0.625 9.46443 1.46447 8.62496 2.5 8.62496C3.53553 8.62496 4.375 9.46443 4.375 10.5ZM2.5 20.7083C3.53553 20.7083 4.375 19.8688 4.375 18.8333C4.375 17.7978 3.53553 16.9583 2.5 16.9583C1.46447 16.9583 0.625 17.7978 0.625 18.8333C0.625 19.8688 1.46447 20.7083 2.5 20.7083Z" fill="#287FB8"/></svg>
      </button>
      {isOpen ? <div className={styles.menu.wrapper}>
        <label className={styles.menu.label}>
          <input className={styles.menu.checkbox} type="checkbox" onChange={toggleChecked} checked={isClicked} />
          <span className={styles.menuCheckIcon}>check</span>
          非表示タスクも表示
        </label>
      </div> : null}
    </div>
  )
};

export default Menu;
