const FooterCTA = ({text}) => {
    return (
        <>
            <h4 className="p_slug">

                {text.map((line, index) => (

                    <>
                        {(index !== 0) && (<br/>)}
                        <span key={line}>{line}</span>
                    </>
                    
                ))}
            </h4>
        </>
    );
}

export default FooterCTA;