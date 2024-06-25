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
            loading="lazy"
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
            <p className="text-[26] font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </p>
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
                      className={cn("flex gap-4 p-3 rounded", {
                        "bg-bankGradient": isActive,
                      })}
                    >
                      <Image
                        loading="lazy"
                        src={items?.imgURL}
                        width={20}
                        height={20}
                        alt={items?.label}
                        className={cn({
                          "brightness-[3] invert-0": isActive,
                        })}
                      />
                      <p
                        className={cn("text-16 text-gray-900", {
                          "text-white": isActive,
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
