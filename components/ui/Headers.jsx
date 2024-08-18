import Link from "next/link";
import { Button } from "./ui/Button";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-black bg-pink-50/20">
            <div className="container mx-auto">
                <Link>
                <h1>Portfolio</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
