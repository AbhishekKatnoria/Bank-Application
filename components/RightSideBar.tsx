import React from "react";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner">
          <div className="profile">
            <div className="profile-img">
              {user?.firstName && (
                <span className="font-bold text-5xl text-blue-500">
                  {user?.firstName?.[0] || ""}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightSideBar;
