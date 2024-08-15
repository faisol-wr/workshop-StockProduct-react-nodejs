import { Avatar, Box, Typography } from "@mui/material"
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { Link } from "react-router-dom"

const SideNav = () => {

    const { collapsed, toggleSidebar } = useProSidebar()

    const handleMenuClick = () => {
        toggleSidebar()
    }

    return (
        <Sidebar
            style={{ height: "100%", top: 'auto' }}
            breakPoint="md"
            backgroundColor={'white'}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt="Masoud" src="/assets/profile.webp" />
                {!collapsed &&
                    <>  <Typography variant="body2" sx={styles.yourChannel}>Fanas Dom</Typography>
                        <Typography variant="body2">Administrator</Typography></>}
            </Box>

            <Menu
                menuItemStyles={{

                }}>
                <MenuItem
                    component={<Link to="/backend/dashboard" />}
                    icon={<DashboardOutlinedIcon />}
                    onClick={() => handleMenuClick()}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/backend/product" />}
                    icon={<SourceOutlinedIcon />}
                    onClick={() => handleMenuClick()}>
                    <Typography variant="body2">Product </Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/backend/report" />}
                    icon={<AnalyticsOutlinedIcon />}
                    onClick={() => handleMenuClick()}>
                    <Typography variant="body2">Report </Typography>
                </MenuItem>
                <MenuItem
                    component={<Link to="/backend/setting" />}
                    icon={<StyleOutlinedIcon />}
                    onClick={() => handleMenuClick()}>
                    <Typography variant="body2">Setting </Typography>
                </MenuItem >
            </Menu >
        </Sidebar >
    )
}

const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }
}

export default SideNav