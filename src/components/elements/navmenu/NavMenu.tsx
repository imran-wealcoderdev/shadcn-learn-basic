"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const baseLink = "https://ui.shadcn.com/docs/components";

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: `${baseLink}/alert-dialog`,
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: `${baseLink}/hover-card`,
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: `${baseLink}/progress`,
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: `${baseLink}/scroll-area`,
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: `${baseLink}/tabs`,
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: `${baseLink}/tooltip`,
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function NavMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem >
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent className=" bg-gray-400 h-[700px] !overflow-visible !w-[1000px]">
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] relative overflow-visible z-15">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="Introduction" >
                            </ListItem>
                            <ListItem href="/" title="Installation" hasChild>
                            </ListItem>
                            <ListItem href="/" title="Typography">
                            </ListItem>
                            <ListItem title="It Has CHild" hasChild></ListItem>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Documentation
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { hasChild?: boolean }
>(({ className, title, children, hasChild, ...props }, ref) => {
    return (
        <li className="relative group">
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>

            {hasChild && (
                <div className=" w-[300px] absolute left-full top-0 mt-1 !z-100 h-44 p-3 rounded-md bg-blue-300 shadow-lg text-sm  hidden group-hover:block">
                    <p className="text-muted-foreground">Submenu content for {title}</p>
                    <ul className="space-y-2">
                        <li className="hover:text-accent-foreground">Option 1</li>
                        <li className="hover:text-accent-foreground">Option 2</li>
                        <li className="hover:text-accent-foreground">Option 3</li>
                    </ul>
                </div>
            )}
        </li>
    );
})
ListItem.displayName = "ListItem"
