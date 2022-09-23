import { Row, Col, Text, Input, Spacer, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function Form() {
  const [URL, setURL] = useState("");
  const [suffix, setSuffix]= useState("");
  const [shortURL, setShortURL] = useState();

// var response = shortURL;

  async function handleSubmit() {
    console.log(URL);
    var newURL = await fetch(`https://b-z.fr/shortlink`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ URL: URL, suffix: suffix }),
    });
    newURL = await newURL.json();
    setShortURL(newURL);
  }
    // useEffect(() =>{
    //   response = shortURL
    // },[shortURL])

  return (
    <Col>
      <Row justify="center">
        <Input
          onChange={(e) => setURL(e.target.value)}
          color="secondary"
          clearable
          placeholder="https://monurl.com/"
        />
                </Row>
                <Spacer x={0.5} />

                <Row justify="center">

        <Input
          onChange={(e) => setSuffix(e.target.value)}
          color="secondary"
          clearable
          placeholder="fin personnalisée (optionnel)"
        />
        
        </Row>
        <Spacer x={0.5} />

        <Row justify="center">

        <Button onPress={handleSubmit}>Créer mon lien B-Z.fr</Button>
      </Row>
      <Spacer x={0.5} />

      <Row justify="center">
      <a href={shortURL}>{shortURL}</a>

      </Row>
    </Col>
  );
}
