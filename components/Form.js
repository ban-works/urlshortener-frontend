import { Row, Col, Text, Input, Spacer, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function Form() {
  const [URL, setURL] = useState("");
  const [shortURL, setShortURL] = useState();

  var response = shortURL;

  async function handleSubmit() {
    console.log(URL);
    var newURL = await fetch(`https://b-z.fr/shortlink`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ URL: URL }),
    });
    newURL = await newURL.json();
    setShortURL(newURL);
  }
  //   console.log(shortURL);
  //   useEffect(() =>{
  //     console.log(shortURL)
  //     response = shortURL.URL
  //   },[shortURL])

  return (
    <Col>
      <Row>
        <Input
          onChange={(e) => setURL(e.target.value)}
          color="secondary"
          clearable
          placeholder="https://monurl.com/"
        />
        <Spacer x={0.5} />
        <Button onPress={handleSubmit}>Créer mon lien B-Z.fr</Button>
      </Row>
      <Row>
      <Spacer y={0.5} />
      <a href={response}>{response}</a>

      </Row>
    </Col>
  );
}
