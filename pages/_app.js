import Layout from "../components/layout";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
  );
}
