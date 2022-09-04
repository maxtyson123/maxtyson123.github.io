    import { useState, useEffect } from "react";
    import { Container, Row, Col } from "react-bootstrap";
    import headerImg from "../assets/img/header-img.png";
    import TrackVisibility from 'react-on-screen';

    export const Banner = () => {
        const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [text, setText] = useState('');
        const [delta, setDelta] = useState(150 - Math.random() * 100);
        const [index, setIndex] = useState(1);
        const toRotate = ["Im a Web Developer","Im a Game Developer","Im a App Developer","Im a Program Developer","I use JS","I use Node JS","I use PHP","I use C#","I use HTML","I use CSS","I use Unity","I use Python","I use Blender"];
        const period = 2000;

        useEffect(() => {
            let ticker = setInterval(() => {
                tick();
            }, delta);

            return () => { clearInterval(ticker) };
        }, [text])

        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2);
            }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setIndex(prevIndex => prevIndex - 1);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setIndex(1);
                setDelta(200);
            } else {
                setIndex(prevIndex => prevIndex + 1);
            }
        }

        return (
            <section className="banner" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome to my Portfolio</span>
                                        <h1>{`Hi! Im Max T, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Im a Web Developer","Im a Game Developer","Im a App Developer","Im a Program Developer","I use JS","I use Node JS","I use PHP","I use C#","I use HTML","I use CSS","I use Unity","I use Python","I use Blender"]'><span className="wrap">{text}</span></span></h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                    </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={headerImg} alt="Header Img"/>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }