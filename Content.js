import { Container, Row, Col, Text, Spacer } from "@nextui-org/react";
import { Box } from "./Box";
import Form from "./components/Form";

export const Content = () => (
  <Box>
    <Container>
      <Col md={4}>
        <Row justify="center">
          <Text h1  css={{textAlign: 'center'}}>
            Crée ton shortlink B-Z.fr <b>gratuitement</b>{"  "} 🪂

          </Text>
        </Row>
        <Row justify="center">
          <Text h3>Colle ton lien ci-dessous :</Text>
        </Row>
      </Col>

      <Form></Form>
    </Container>
  </Box>
);
