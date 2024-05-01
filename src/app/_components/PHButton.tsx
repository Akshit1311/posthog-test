"use client";

import posthog from "posthog-js";
import React from "react";

type Props = {};

const PHButton = (props: Props) => {
  return (
    <button
      onClick={() => {
        alert("Event sending to PostHog");
        posthog.capture("Registered", { Gender: "Male", Age: 21 });
        alert("Event sent to PostHog");
      }}
      className="bg-blue-500 px-2 py-1 rounded-md"
    >
      Submit
    </button>
  );
};

export default PHButton;
