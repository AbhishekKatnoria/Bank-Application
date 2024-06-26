import React from "react";

const Header = ({ title = "title", subtext, type, user }: HeaderBoxProps) => {
  return (
    <div>
      <h1 className="text-24 lg:text-30 font-semibold text-gray-900">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p className="text-14 lg:text-16 font-normal text-gray-500">{subtext}</p>
    </div>
  );
};

export default Header;
