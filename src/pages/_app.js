import "@/styles/globals.css";
import Head from "next/head";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import classes from "../styles/eventSingle.module.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link className={classes.link} href={"/"}>
                ALL EVENTS
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Link className={classes.link} as={"/eventlive"} href={"/"}>
                  Event Live
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Component {...pageProps} />
      </header>
    </>
  );
}
