import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Grid,
  GridItem,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("green.50", "gray.1000")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Wrap>
              <WrapItem>
                <Avatar
                  size={"sm"}
                  name='News'
                  src='https://www.kindpng.com/picc/m/195-1952977_3d-best-logo-maker-online-triangle-logo-design.png'
                />
              </WrapItem>
            </Wrap>
          </Box>
          <Grid
            templateColumns={"repeat(1, 1fr)"}
            p={{ base: "20px", md: "40px" }}
            alignItems={"center"}
          >
            <GridItem>
              <Heading fontSize={{ base: "16px", md: "40px" }} color='text'>
                <span id='news'>News</span>
              </Heading>
            </GridItem>
          </Grid>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                bg={useColorModeValue("green.50", "gray.900")}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://cdn.dribbble.com/users/2095589/screenshots/4166422/media/36bbe20664731ec8dfee1cd7d7033b07.png"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://cdn.dribbble.com/users/2095589/screenshots/4166422/media/36bbe20664731ec8dfee1cd7d7033b07.png"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
