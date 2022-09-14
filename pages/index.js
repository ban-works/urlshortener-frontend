import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Text,
  Switch,
  useTheme,
  Button,
  Spacer,
  Navbar,
  Link,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { SunIcon } from "../public/sunicon";
import { MoonIcon } from "../public/moonicon";
import Form from "../components/Form";
import { Layout } from "../Layout";
import { Logo } from "../Logo";

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Layout>
      <Head>
        <title>B-Z.fr</title>
        <meta
          name="description"
          content="Générez vos short links gratuitement sur B-Z.fr"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <Logo />
          <Text b color="inherit" hideIn="xs">
          SHORT LINKS FOR THE WZBZ TEAM
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Signin{" "}
          </Navbar.Link>
          <Navbar.Item>
            <Switch
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
