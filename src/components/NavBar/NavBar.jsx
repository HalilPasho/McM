import React from "react";
import useStyles from "./NavBarStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import OnOff from "../../assets/images/turn-off.png";
import Profile from "../../assets/images/user.png";
import Mail from "../../assets/images/chat.png";
import Support from "../../assets/images/support.png";

const useStyless = makeStyles((theme) => ({
  mg_top_header: {
    backgroundColor: "#e5e5e5",
    boxShadow: "unset",
    width: "1270px",
    margin: "auto",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      width: "100%",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const classess = useStyless();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <h4 className={classes.logo_title}>McMakler</h4> */}
      <MenuItem>
        <IconButton aria-label="show 4 new mails">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications">
          <Badge badgeContent={11} color="secondary">
            <img
              alt="ex"
              style={{ marginLeft: "0px" }}
              className={classes.icns_header}
              src={OnOff}
            />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classess.mg_top_header} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            // color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <h4 className={classes.logo_title}>McMakler</h4>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div
              style={{
                color: "black",
                display: "flex",
              }}
            >
              <div className={classes.mkr1}>
                <img alt="er" className={classes.support} src={Support} />
                <span className={classes.contact_support}>Contact Support</span>
              </div>

              <div
                className={classes.root}
                aria-label="show new mails"
                color="inherit"
              >
                <Badge variant="dot" color="secondary">
                  <img alt="mail" className={classes.icns_header} src={Mail} />
                </Badge>
              </div>

              <div
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <img alt="ex" className={classes.icns_header} src={Profile} />
              </div>
              <div aria-label="show-or-hide" color="inherit">
                <img alt="ex" className={classes.icns_header} src={OnOff} />
              </div>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
