import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  IconButton,
  Box,
  AppBar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 200;

const Sidebar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Array of navigation items
  const navItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Login", icon: <InfoIcon />, path: "/login" },
    { text: "Contact", icon: <InfoIcon />, path: "/contact" },
  ];

  const drawer = (
    <div>
      {mobileOpen && (
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "flex", md: "none" },
            alignSelf: "flex-end",
            fontSize: "24px",
          }}
        >
          <CloseIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
      )}
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => navigate(item.path)}
            component={"div"}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ display: { sm: "none" } }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
