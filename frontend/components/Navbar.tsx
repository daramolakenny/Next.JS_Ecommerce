import Search from "./Search";

const link = [
    {
        id: 0,
        title: 'Home',
        href: '/home',
    },
    {
        id: 1,
        title: 'Product',
        href: '/product',
    },
    {
        id: 2,
        title: 'About',
        href: '/about',
    },
    {
        id: 3,
        title: 'Blog',
        href: '/blog',
    },
    {
        id: 4,
        title: 'Contact Us',
        href: '/contact'
    },
    {
        id: 5,
        title: 'cart',
        href: '/cart'
    }
];

// interface links = {''}[]

export default function Navbar() {

    return (
        <header className="">
            <div>
                <div>
                    {/* <img src="" alt="" /> */}
                </div>
                
                <ul>
                    {link.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}> {item.title} </a>
                        </li>
                    ))}
                </ul>

                <Search />
            </div>
        </header>
    );
}