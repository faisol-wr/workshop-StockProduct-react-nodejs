import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

const AppHeader = () => {

    return (
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton color="secondary">
                    <MenuIcon />
                </IconButton>
                <Box
                    component={'img'}
                    sx={styles.appLogo}
                    src="/assets/logo.jpg" />
                <Box sx={{ flexGrow: 1 }} />
                <IconButton title="Settings" color="secondary">
                    <SettingsIcon />
                </IconButton>
                <IconButton title="Sign Out" color="secondary">
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const styles = {
    appBar: {
        bgcolor: 'teal'
    },
    appLogo: {
        borderRadius: 2,
        width: 40,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default AppHeader