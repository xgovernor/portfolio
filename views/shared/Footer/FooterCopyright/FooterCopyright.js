import Container from '../../../../components/Container'

const FooterCopyright = ({text}) => {
    return (
        <>
            <Container dataClass="p_copyright">
                <p>{text}</p>
            </Container>
        </>
    );
}

export default FooterCopyright;