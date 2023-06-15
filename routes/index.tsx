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
      <div class="p-4 mx-auto max-w-screen-md font-mono">
        <h1 class="text-3xl mb-4">Ask MoF</h1>
        <SearchDialog />
      </div>
    </>
  );
}
