import Head from 'next/head';

const Meta = ({title}) => {
    return (
        <>
            {/* General Tags */}
            <meta name="title" content="Font-end Web Developer" />
            <meta name="description" content="Abu Taher Muhammad is a MERN stack web developer from Bangladesh. He is also experienced with WordPress, Data scraping with python. In his spare time," />
            <meta name="keywords" content="Font-end, web developer, top web developer, Abu Taher Muhammad, MERN stack developer, upwork" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />

            {/* Open Graph Data */}
            <meta property="og:title" content="Portfolio" />
            <meta property="og:site_name" content="Abu Taher Muhammad" />
            <meta property="og:url" content="https://at-mah.vercel.app" />
            <meta property="og:description" content="Abu Taher Muhammad is a MERN stack web developer from Bangladesh. He is also experienced with WordPress, Data scraping with python. In his spare time, he likes to study robotics, read books, etc." />
            <meta property="og:type" content="profile" />
            <meta property="og:image" content="https://at-mah.vercel.app/images/branding/logo.svg" />

            {/* JSON-LD */}
            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "http://www.schema.org",
                    "@type": "person",
                    "name": "Abu Taher Muhammad",
                    "jobTitle": "Web Developer",
                    "height": "68.4",
                    "gender": "male",
                    "url": "https://at-mah.vercel.app",
                    "sameAs": [
                        "https://www.linkedin.com/in/rootover3/",
                        "https://github.com/rootOver3"
                    ],
                    "image": "https://drive.google.com/file/d/13TQA24DvJCnwUWSfCaSIQv4Nd6n_D1Hs/view?usp=sharing",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "House: 26, Road: 29, Block: D, Shahjalal Uposhahar",
                        "postOfficeBoxNumber": "3100",
                        "addressLocality": "Sylhet",
                        "addressRegion": "Sylhet",
                        "postalCode": "3100",
                        "addressCountry": "Bangladesh"
                    },
                    "email": "abutahermuhammad@outlook.com",
                    "birthDate": "2003-02-10",
                    "birthPlace": "Sylhet",
                    "nationality": "Bangladeshi",
                    "telephone": "+880 1627085640"
                }) }}
            ></script>
        </>
    );
}

export default Meta;