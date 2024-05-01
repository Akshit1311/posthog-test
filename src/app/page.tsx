// import posthog from "posthog-js";

import PHButton from "./_components/PHButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <button
        onClick={() => {
          posthog.capture("my event", { property: "value" });
        }}
        className="bg-blue-500 px-2 py-1 rounded-md"
      >
        Submit
      </button> */}
      <PHButton />
    </main>
  );
}
