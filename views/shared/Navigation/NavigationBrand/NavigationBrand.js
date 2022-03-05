import Link from 'next/link';

const NavigationBrand = ({title, url}) => {
    return (
        <>
            <Link href={url}>
                <a className="p_brand">
                    {title}
                </a>
            </Link>
        </>
    );
}

export default NavigationBrand;