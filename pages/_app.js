import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
}

export default MyApp;
