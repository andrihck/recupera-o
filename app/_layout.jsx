import React from "react";
import { Slot } from "expo-router";
import { AppProvider } from "../scripts/appContext";

const Layout = () => {
    return (
        <AppProvider>
            <Slot />
        </AppProvider>
    );
};

export default Layout;