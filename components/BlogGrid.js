import Container from "../views/shared/Container/Container";
import BlgoGridCard from "./BlogGridCard";

const DATA_BLOG = [
	{
		slug: "jh",
		title: "You need to learn Kubernetes RIGHT NOW!! 🚀",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "20 Awesome Website You Didn't Know About",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "Optimize Dockerfile images for NextJS",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "Creating an infinite scroll with React JS! ♾️",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "Simple Node JS Resize Image Before Upload using Sharp Multer",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "From Engineer to Tech Lead - Doubts and Challenges",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "From Engineer to Tech Lead - Doubts and Challenges",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "From Engineer to Tech Lead - Doubts and Challenges",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "From Engineer to Tech Lead - Doubts and Challenges",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
	{
		slug: "jh",
		title: "From Engineer to Tech Lead - Doubts and Challenges",
		excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`,
		url: "/articles/jh",
		meta: "PUBLISHED MARCH 21, 2021",
	},
];
export default function BlogGrid() {
	return (
		<>
			<section className="p_blog_grid">
				<Container dataClass="p_content">
					{DATA_BLOG.map((data, i) => (
						<BlgoGridCard
							key={i}
							meta={data.meta}
							slug={data.slug}
							title={data.title}
							excerpt={data.excerpt}
							url={data.url}
						/>
					))}
				</Container>
			</section>
		</>
	);
}
