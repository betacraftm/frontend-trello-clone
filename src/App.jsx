import useColorScheme from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
function App() {
  return (
    <Container maxWidth='false' disableGutters sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`
      }}>
        Board Content
      </Box>
    </Container>
  )
}

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    // setAge(event.target.value)
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="select-dark-light-mode"
        id="dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Light <LightModeIcon fontSize='small' />
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            Dark <DarkModeOutlinedIcon fontSize='small' />
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            System <SettingsBrightnessIcon fontSize='small' />
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default App
