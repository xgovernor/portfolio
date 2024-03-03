const FooterCTA = ({text}) => {
    return (
        <>
            <h4 className="p_slug">

                {text.map((line, index) => (

                    <span key={index}>
                        {(index !== 0) && (<br/>)}
                        <span>{line}</span>
                    </span>
                    
                ))}
            </h4>
        </>
    );
}

export default FooterCTA;