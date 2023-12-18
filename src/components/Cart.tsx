"use client";
import { useEffect } from "react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { CarrotIcon, ShoppingCartIcon } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
const Cart = () => {

    const itemCount = 1;
    const fee = 1;
    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <Button variant='ghost'>
                    <ShoppingCartIcon className='h-6 w-6' aria-hidden='true' />
                    <span className='ml-2 text-sm font-medium text-gray-900 group-hover:text-gray-800'>0</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full pr-0 flex-col sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Cart(0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className='flex w-full flex-col pr-6'>
                            {/* Cart logic */}
                            Cart items
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-y-1.5 text-sm">
                                <div className='flex'>
                                    <span className='flex-1'>Shiping</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Shiping</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href='/checkout'
                                        className={buttonVariants({
                                            className: 'w-full',
                                        })}
                                    >
                                        Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col h-full justify-center items-center space-y-1'>
                        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                            <CarrotIcon className='absolute top-0 left-0 h-full w-full' />
                        </div>
                        <div className="text-l font-medium">
                            Your cart is empty
                        </div>
                    </div>

                )}
            </SheetContent>
        </Sheet>
    )
}

export default Cart