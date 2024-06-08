"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileSidebar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={24}
            height={24}
            alt="Ham-Burger"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white border-none">
          <Link
            href="/"
            className="cursor-pointer flex flex-row xl:mb-12 gap-1 items-center"
          >
            <Image
              src="/icons/logo.svg"
              width={24}
              height={24}
              alt="Horizen Logo"
            />
            <h1 className="text-[26] font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="flex flex-col">
            <nav className="flex h-full flex-col w-full gap-6 text-white pt-16">
              {sidebarLinks?.map((items, index) => {
                const isActive =
                  pathname === items.route ||
                  pathname.startsWith(`${items.route}/`);
                return (
                  <SheetClose asChild key={items.route}>
                    <Link
                      href={items?.route}
                      key={index}
                      className={cn("sidebar-link", {
                        "bg-bankGradient": isActive,
                      })}
                    >
                      <div className="flex gap-3 size-6 relative">
                        <Image
                          loading="lazy"
                          src={items?.imgURL}
                          width={24}
                          height={24}
                          alt="sideBar"
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
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
                  </SheetClose>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileSidebar;
