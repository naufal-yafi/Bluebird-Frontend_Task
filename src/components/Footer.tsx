import { Container, Link } from "@mui/material";

const Footer = () => {
  return (
    <Container sx={{ textAlign: "center", pt: 5, pb: 15 }}>
      Created by{" "}
      <Link href="https://github.com/naufal-yafi/Bluebird-Frontend_Task">
        Muhammad Naufal Yafi'
      </Link>
    </Container>
  );
};

export default Footer;
