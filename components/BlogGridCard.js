import Link from "next/link";

export default function BlgoGridCard() {
    return (
        <>
            <div className="p_blog_grid_card">
                <h4 className="p__meta">PUBLISHED MARCH 21, 2021</h4>
                <Link href={`/articles/jh`}>
                    <a className="p__title_link">
                        <h3 className="p__title">From Engineer to Tech Lead - Doubts and Challenges </h3>
                    </a>
                </Link>
                
                <p className="p__excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link href={`/articles/jh`}>
                    <a className="p__readmore">Read in details</a>
                </Link>
            </div>
        </>
    ) 
}