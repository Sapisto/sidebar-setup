import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Box,
  AppBar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/AccountCircle";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HistoryIcon from "@mui/icons-material/History";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";
import TaskIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 200;

const Sidebar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Templates", icon: <LoginIcon />, path: "/login" },
    { text: "Contact", icon: <ContactMailIcon />, path: "/contact" },
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "History", icon: <HistoryIcon />, path: "/history" },
    { text: "Products", icon: <ShoppingCartIcon />, path: "/product" },
    { text: "", icon: <Box sx={{ height: "10px" }} />, path: "" },
    { text: "Messages", icon: <MessageIcon />, path: "/message" },
    { text: "Tasks", icon: <TaskIcon />, path: "/task" },
    { text: "Settings", icon: <SettingsIcon />, path: "/setting" },
  ];

  const handleItemClick = (itemPath: string) => {
    setSelectedItem(itemPath);
    navigate(itemPath);
  };

  const drawer = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",     
        }}
      >
        <img
          src="/assets/acube.jpg"
          alt="logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            maxHeight: "130px",
            // width: "200px",
          }}
        />
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) =>
          item.text ? (
            <ListItem
              key={item.text}
              onClick={() => handleItemClick(item.path)}
              component={"div"}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "rgba(0, 123, 255, 0.1)",
                  color: "blue",
                },
                ...(selectedItem === item.path && {
                  backgroundColor: "rgba(0, 123, 255, 0.2)",
                  color: "blue",
                  fontWeight: 700,
                }),
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ) : (
            <div key={item.text}>{item.icon}</div>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        position: "fixed",
        height: "100vh",
        width: drawerWidth,
      }}
    >
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
            height: "100vh",
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
            height: "100vh",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
