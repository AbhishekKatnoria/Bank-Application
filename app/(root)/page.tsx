import TotalBalanceBox from "@/components/TotalBalanceBox";
import Header from "@/components/Header";
import React from "react";

const Home = () => {
  const login = { firstName: "Abhishek" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={login?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts ={[]}
            totalBanks={2}
            totalCurrentBalance={1250.35  }
          />        
        </header>
      </div>
    </section>
  );
};
export default Home;
