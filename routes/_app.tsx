import { AppProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";

export default function App({
  Component,
}: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href={asset("/css/bootstrap.min.css")} rel="stylesheet" />
        <link href={asset("/css/style.css")} rel="stylesheet" />
        <link href={asset("/css/vendors.min.css")} rel="stylesheet" />
        <link href={asset("/css/custom.css")} rel="stylesheet" />
      </Head>
      <div id="page">
        <Header />
        <main>
          {<Component />}
        </main>
        <Footer />
      </div>
      <script src={asset("/js/jquery-3.7.0.min.js")}></script>
      <script src={asset("/js/common_scripts.js")}></script>
      <script src={asset("/js/main.js")}></script>
    </>
  );
}
