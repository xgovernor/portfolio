import Link from 'next/link';

const NavigationMenu = ({links}) => {

    return (
        <>
            <ul className="p_navigation_menu p__im">
                {links && links.map(link => (
                    <li key={link._id}>
                        <Link href={link.url}>
                            <a>
                                {link.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NavigationMenu;