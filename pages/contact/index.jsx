// Core Components
import Link from "next/link";
import Container from "../../components/components/Container";
// Custom Components
import PageBanner from "../../components/PageBanner";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import ContactForm from "../ContactForm";
import IMG from "../../assets/images/contact.jpg";

export default function Contact() {
  /**
   * ToDo
   * On Every Submit:
   * 	1) User will receive a confirmation email.
   * 	2) A copy will be sent to my email.
   * 	3) A copy of response will store on the sanity.
   */
  const formSubmitHandler = (values) => {
    // Response Object
    // {
    // 	"name": "Abu Taher Muhammad",
    // 	"email": "abutahermuhammad@outlook.com",
    // 	"phone": "01627085640",
    // 	"message": "Nice to meet you Mr. Muhammad. I need some help with a project of mine."
    // }
    // console.log(values);
  };

  return (
    <>
      <Layout>
        <PageHeader
          data={{
            heading: "GET IN TOUCH",
            subheading: ["Life.", "It could just the", "thing your brand need"],
          }}
        />

        <PageBanner img={IMG} />

        <section className="p_contact_form" data-scroll-section>
          <Container className="p_header">
            <h1 data-scroll className="p__subtitle">
              Contact me
            </h1>
          </Container>

          <Container className="p_content">
            <div className="p__left">
              <ContactForm onSubmit={formSubmitHandler} />
            </div>

            <div className="p__right">
              <div className="p_right_content">
                <h4 data-scroll className="p__title">
                  Email
                </h4>
                <ul className="p__list mb_20">
                  <li data-scroll>
                    <Link href="mailto:abut1081@gmail.com">
                      <a>abut1081@gmail.com</a>
                    </Link>
                    - Probably the easiest way to reach out to Muhammad..
                  </li>
                </ul>

                <h4 className="p__title">Social</h4>
                <ul className="p__list">
                  <li data-scroll>
                    <Link href="https://www.linkedin.com/in/abutahermuhammad/">
                      <a target="_blank">Linkedin</a>
                    </Link>
                    - Where Muhammad strives to look professional 😎.
                  </li>
                  <li data-scroll>
                    <Link href="https://github.com/abutahermuhammad">
                      <a target="_blank">GitHub</a>
                    </Link>
                    - Where Muhammad hopefully will post design related stuff
                    occasionally 🎨.
                  </li>
                </ul>

                <p data-scroll className="mt_20">
                  So in case you wonder anything, reach out to Muhammad,
                  it&apos;ll be fun!✌️
                </p>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
}
