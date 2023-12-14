import { AppBar, Container, Toolbar, Typography } from "@mui/material"

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography>Bank of React</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar