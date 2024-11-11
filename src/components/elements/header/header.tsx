import { Button } from "@/components/ui/button";
import { NavMenu } from "../navmenu/NavMenu";

export function Header() {
    return (
        <header className="fixed w-full bg-gray-800 text-white p-4">
            <div className="flex items-center justify-center space-x-3">
                <div className="text-xl font-bold">
                    <a href="/">ShadcnUI Practic WebApp</a>
                </div>
                <NavMenu />
                <Button>Sign UP</Button>
                {/* The NavigationMenu goes here */}
            </div>
        </header>
    );
}