import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";
import Animated from "./Animated";
import DoughNutChart from "./DoughNutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="w-full flex border border-gray-200 rounded p-4 shadow-chart sm:gap-6 sm:p-6">
      <div className="max-  w-[120]">
        <DoughNutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-semibold">{totalBanks} Banks Account</h1>
        <div className="flex flex-col gap-2 justify-center items-start">
          <p className="text-sm font-medium text-gray-500">
            Total Current Balance
          </p>
          <div className="font-semibold text-3xl">
            <Animated account={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
