"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="cursor-pointer flex flex-row mb-12 gap-2 items-center"
        >
          <Image
            src="/icons/logo.svg"
            width={24}
            height={24}
            alt="Horizen Logo"
            className="size-[24] max:xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks?.map((items, index) => {
          const isActive =
            pathname === items.route || pathname.startsWith(`${items.route}/`);
          return (
            <Link
              href={items?.route}
              key={index}
              className={cn("sidebar-link", { "bg-bankGradient": isActive })}
            >
              <div className="flex gap-3 size-6 relative">
                <Image
                  loading="lazy"
                  src={items?.imgURL}
                  width={24}
                  height={24}
                  alt="sideBar"
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {items?.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;
