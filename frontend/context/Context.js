import React, { createContext, useContext, useState, useEffect } from "react";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const Context = ({ children }) => {
  const [mobile, setMobile] = useState(true);
  const [rightBar, setRightBar] = useState(true);
  const [toggleTop, setToggle] = useState(true);
  const [toggleAuth, setToggleAuth] = useState(true);
  const [showItem, setShowItem] = useState(true);
  const [activeMobileMenu, setActiveMobileMenu] = useState(true);

  // Auth state
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth < 1600) {
      setMobile(false);
      setRightBar(false);
    } else {
      setMobile(true);
      setRightBar(true);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Check for existing auth token
    const token = localStorage.getItem("boomai-token");
    const savedUser = localStorage.getItem("boomai-user");
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("boomai-token");
        localStorage.removeItem("boomai-user");
      }
    }

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("boomai-token", token);
    localStorage.setItem("boomai-user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("boomai-token");
    localStorage.removeItem("boomai-user");
    setUser(null);
    setIsAuthenticated(false);
  };

  const shouldCollapseLeftbar = !mobile;
  const shouldCollapseRightbar = !rightBar;

  return (
    <CreateContext.Provider
      value={{
        mobile,
        setMobile,
        showItem,
        setShowItem,
        activeMobileMenu,
        setActiveMobileMenu,
        toggleTop,
        setToggle,
        toggleAuth,
        setToggleAuth,
        rightBar,
        setRightBar,
        shouldCollapseLeftbar,
        shouldCollapseRightbar,
        user,
        setUser,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
