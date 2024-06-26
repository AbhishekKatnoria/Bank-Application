import TotalBalanceBox from "@/components/TotalBalanceBox";
import Header from "@/components/Header";
import React from "react";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
  const loginIn = { firstName: "Abhishek", lastName: "katnoria" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loginIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1250.35}
          />
        </header>
        Recent Transition
      </div>
      <RightSideBar user={loginIn} transactions={[]} banks={[]} />
    </section>
  );
};
export default Home;
