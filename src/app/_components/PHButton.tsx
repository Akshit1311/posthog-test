"use client";

import posthog from "posthog-js";
import React from "react";

type Props = {};

const PHButton = (props: Props) => {
  return (
    <button
      onClick={() => {
        posthog.capture("my event", { property: "value" });
      }}
      className="bg-blue-500 px-2 py-1 rounded-md"
    >
      Submit
    </button>
  );
};

export default PHButton;
