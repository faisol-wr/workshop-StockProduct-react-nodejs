import { Delete, Photo, Send } from "@mui/icons-material"
import { Button, Stack } from "@mui/material"

function App() {

  return (
    <>
      <h1>MUI Button</h1>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <h3>MUI Button with Icon</h3>
      <Stack direction="row" spacing={2}>
        <Button variant="text" startIcon={<Delete />}>Delete</Button>
        <Button variant="contained" startIcon={<Send />}>Send</Button>
        <Button variant="outlined" startIcon={<Photo />}>Photo</Button>
      </Stack>
    </>
  )
}

export default App
