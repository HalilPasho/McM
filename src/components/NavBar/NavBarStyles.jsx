import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
    color: "#4A4A4A",
  },
  mg_top_header: {
    padding: "0 200px",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  },
  logo_title: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#343434",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 120px",
      display: "flex",
    },
  },
  contact_support: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
  },
  icns_header: {
    width: "22px",
    marginLeft: "32px",
    cursor: "pointer",
    color: "#4A4A4A",
  },

  mkr1: {
    cursor: "pointer",
    display: "inline-block",
    // marginRight: "38px",
    marginTop: "-3px",
  },

  support: {
    width: "20px",
    marginRight: "10px",
    position: "relative",
    top: "4px",
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    color: "black",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
