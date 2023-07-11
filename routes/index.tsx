import { Head } from "$fresh/runtime.ts";
import SearchDialog from "@/islands/SearchDialog.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask MoF</title>
        <meta
          name="description"
          content="Ask from Ministry of Finance Knowledge Base."
        />
      </Head>
      <section class="hero_single version_2">
        <div class="wrapper">
          <div class="container">
            <h3>AskMoF</h3>
            <p>Tanyakan pertanyaan anda tentang Keuangan Negara.</p>
            <SearchDialog />
          </div>
        </div>
      </section>
    </>
  );
}
