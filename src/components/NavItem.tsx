"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  // close: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  // close,
  isOpen,
}: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDownIcon
            className={cn('h-4 w-4 transition-all text-muted-foreground', {
                '-rotate-180': isOpen
            })}
            />
        </Button>
      </div>

      {isOpen ? (
        <div className={cn('absolute top-full inset-x-0 text-sm text-muted-foreground', {
            'animate-in fade-in-10 slide-in-from-top-5' : !isAnyOpen,
        })}>
          <div className='absolute inset-0 bg-white shadow'  aria-hidden='true' />

          <div className="absolute bg-white">
            <div className='mx-auto max-w-3xl px-8'>
               <div className=' grid grid-cols-4 gap-y-1 py-2'>
                  <div className="flex flex-col gap-1">
                    {category.featured.map((item) => (
                      <div key={item.name}
                      className='group relative text-base sm:text-sm'>
                        <div className='relative aspect-video overflow-hidden group-hover:opacity-75'>
                          <Link href={item.href} className='text-primary'>
                            {item.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
