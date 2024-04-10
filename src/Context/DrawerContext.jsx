import React, { createContext, useCallback, useMemo, useState } from "react";

export const SidebarContext = createContext();

function DrawerContext({ children }) {
    const [mobileDrawer, setMobileDrawer] = useState(false);

    // Memoize the toggleDrawer function using useCallback
    const toggleDrawer = useCallback(() => {
        setMobileDrawer(prevState => !prevState);
    }, []); // No dependencies needed since toggleDrawer does not rely on external variables

    // Memoize the context value using useMemo
    const value = useMemo(() => ({ mobileDrawer, toggleDrawer }), [mobileDrawer, toggleDrawer]);

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
}

export default DrawerContext;
