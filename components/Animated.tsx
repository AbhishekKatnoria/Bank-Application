"use client";
import React from "react";
import CountUp from "react-countup";

const Animated = ({ account }: { account: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={account}
        decimal="."
        prefix="$"
        decimals={2}
      />
    </div>
  );
};

export default Animated;
