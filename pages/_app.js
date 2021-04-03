import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";
import checkLanguage from "@/miscs/checkLanguage";
import { MenuProvider } from "@/miscs/ContextMenuProvider";
import { ThemeProvider } from "styled-components";
import * as theme from "@/miscs/theme";
import TagManager from "react-gtm-module";

class MyApp extends App {
    state = {
      headerMenu: [],
      footerMenu: [],
      config: {},
      general: {},
        completelyLoaded: false,
        name: 'E-medee',
        description: 'To be continued...'
    };
    async componentDidMount() {
        const res = await checkLanguage('/settings', null, true);
        const config = {width: window.innerWidth, height: window.innerHeight};
        this.setState({ completelyLoaded: true, headerMenu: res.data.Menuheader, footerMenu: res.data.Menufooter, general: {social: res.data.Social_links, copyright: res.data.Copyright}, config });

        // GOOGLE TAG MANAGER
        // const tagManagerArgs = { gtmId: "GTM-5GWNX89" };
        // TagManager.initialize(tagManagerArgs);
    }

    render() {
        const { Component, pageProps, router } = this.props;
            return (
                <ThemeProvider theme={theme}>
                    <MenuProvider value={this.state}>
                        <AnimatePresence exitBeforeEnter>
                            <Component {...pageProps} key={router.route} />
                        </AnimatePresence>
                    </MenuProvider>
                </ThemeProvider>
            );
    }
}

export default MyApp;