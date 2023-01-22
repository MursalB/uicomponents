import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function App() {
  return (
    <Box>
      <Typography variant="h4" align="center" m={3}>Login form</Typography>
      <Box sx={{ width:400, m:" 0 auto"}} >
        <Stack direction="column" spacing={2} textAlign="center">
          <Paper elevation={3} sx={{ p:4}}>
          <TextField 
          id="outlined-password-input"
          label="Username"
          type="text"
          autoComplete="current-password"
          m={2} />
           <TextField 
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          sx={{ m:3}} />
          <Box sx={{ textAlign:"center"}}>
          <Button variant="contained" >Login</Button>
          <Button sx={{ m:2}} variant="contained">Reg</Button>
          </Box>
          </Paper>

        </Stack>

      </Box>
    </Box>
  );
}

export default App;
