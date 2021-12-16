import { AppProps } from "next/app";
import SiteSettings from "components/site-settings";
import PageHead from "components/head/static";
import Theme from 'theme/index';

import "styles/global.css";


export default function App({ Component, pageProps }: AppProps) {
    return (
        <Theme>
            <PageHead />
            <Component {...pageProps} />
            <SiteSettings />
        </Theme>
    );
}
