import { Box, Image, Text } from "@chakra-ui/react";

import VrLogoMain from "../../assets/images/vr-logo-main.png";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="1px"
      borderColor="#dddd"
      display="flex"
      justifyContent="left"
      alignItems="center"
      gap="40px"
      padding="3.1rem"
    >
      <Image src={VrLogoMain} />
      <Text fontSize="1.4rem">
        © 2024 VR Benefícios - Todos os direitos reservados
      </Text>
    </Box>
  );
};

export default Footer;
