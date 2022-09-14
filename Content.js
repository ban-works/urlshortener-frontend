import { Container, Row, Col, Text, Spacer } from "@nextui-org/react";
import { Box } from "./Box";
import Form from "./components/Form";

export const Content = () => (
  <Box>
    <Container fluid justify="center" >
    <Col md={4}>

        <Text h1 textAlign="center">
          Créez votre lien B-Z.fr <b>gratuitement</b>, en un clic !
        </Text>
        <Text h3>Collez votre lien ci-dessous !</Text>

      <Spacer y={0.5} />
    </Col>

      <Form></Form>
      
    </Container>
  
  </Box>
);
