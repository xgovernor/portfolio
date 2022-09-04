import Container from "../../Container/Container";
const FooterCopyright = ({ text }) => {
	return (
		<>
			<Container className="p_copyright">
				<p>{text}</p>
			</Container>
		</>
	);
};

export default FooterCopyright;
