import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import type { CreateCompletionResponse } from "openai";

export default function SearchDialog() {
  const isLoading = useSignal(false);
  const answer = useSignal("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: Event) => {
    e.preventDefault();
    answer.value = "";
    isLoading.value = true;

    const query = new URLSearchParams({ query: inputRef.current!.value });
    const eventSource = new EventSource(`api/vector-search?${query}`);

    eventSource.addEventListener("error", (err) => {
      isLoading.value = false;
      console.error(err);
    });
    eventSource.addEventListener("message", (e: MessageEvent) => {
      isLoading.value = false;

      if (e.data === "[DONE]") {
        eventSource.close();
        return;
      }

      const completionResponse: CreateCompletionResponse = JSON.parse(e.data);
      const text = completionResponse.choices[0].text;

      answer.value += text;
    });

    isLoading.value = true;
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div id="custom-search-input">
          <div className="input-group">
            <input
              name="search"
              ref={inputRef}
              placeholder='misalnya: "Bagaimana ketentuan belanja modal?"'
              disabled={!IS_BROWSER}
              class="search-query"
            />
            <input
              disabled={!IS_BROWSER}
              class="btn_search"
              type="submit"
              value="Kirim"
            />
          </div>
        </div>
      </form>
      <p>{isLoading.value ? "Memuat..." : answer}</p>
    </>
  );
}
