/** @format */

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Breadcrumbs } from "@mui/material";
import { IoCaretBackOutline } from "react-icons/io5";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import logo from "../assets/images/logo.svg";
import { BiBookOpen, BiBriefcase, BiRightArrow } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa6";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface PersistentDrawerLeftProps {
  children: React.ReactNode;
}

const drawerItems = [
  {
    category: "Main",
    items: [
      {
        link: "/Admin-panel/Contact-Submission",
        text: "Contact Submissions",
        icon: <FaAddressBook style={{ color: "#3B82F6" }} />,
      },
      {
        link: "/Admin-panel/Case-Study",
        text: "Case Study",
        icon: <BiBookOpen style={{ color: "#3B82F6" }} />,
      },
      {
        text: "Careers",
        icon: <BiBriefcase style={{ color: "#3B82F6" }} />, // Nested list example
        nestedItems: [
          {
            link: "/Admin-panel/Careers/Add-Jobs",
            text: "Add Jobs ",
            icon: <BiRightArrow />,
          },
          {
            link: "/Admin-panel/Careers/Applications-Submitted",
            text: "Applications submitted",
            icon: <BiRightArrow />,
          },
        ],
      },
    ],
  },
];

export default function PersistentDrawerLeft({
  children,
}: PersistentDrawerLeftProps) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  const [nestedOpen, setNestedOpen] = React.useState(false);
  const [dropDown, setDropDown] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNestedClick = () => {
    setNestedOpen(!nestedOpen);
  };
  const navigate = useNavigate();
  const title = React.useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[segments.length - 1]?.replace(/-/g, " ") || "dashboard";
  }, [pathname]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className='w-full flex justify-between'>
            <Box
              display={"flex"}
              flexDirection={"row"}
              sx={{ gap: { xs: "5px", md: "5px", lg: "10px" } }}
              alignItems={"center"}
            >
              <IoCaretBackOutline
                onClick={() => navigate(-1)}
                className='size-11  max-tablet:size-8 bg-white rounded-md max-tablet:rounded-sm'
                style={{
                  boxShadow: "2px 4px 4px #00000033",
                  color: "#3B82F6",
                }}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ lineHeight: "17px", paddingTop: { xs: 0, sm: 0, lg: 0 } }}
              >
                <Typography
                  variant={"subtitle1"}
                  pt={{ md: 0, xs: "4px" }}
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                  noWrap
                  component='div'
                  // color={colors.text.main}
                >
                  {title}
                </Typography>
                <Breadcrumbs
                  className=' '
                  sx={{
                    // display: { xs: "none", sm: "flex" },
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    overflow: "hidden", // Hide overflow text
                    whiteSpace: "nowrap", // Prevent line breaks
                    flexWrap: "nowrap", // Allow wrapping if needed
                    "& .MuiBreadcrumbs-ol .MuiBreadcrumbs-separator ": {
                      marginLeft: "0px",
                      marginRight: "0px",
                    },
                  }}
                  separator={
                    <NavigateNextIcon
                      sx={{ fontSize: { xs: "1.1rem", md: "1.3rem" } }}
                      aria-label='breadcrumb'
                    />
                  }
                  aria-label='breadcrumb'
                >
                  {pathname
                    ?.split("/")
                    ?.filter(Boolean)
                    ?.map((item, i) => (
                      <Link
                        //   underline='hover'
                        to={""}
                        style={{ cursor: "pointer" }}
                        key={i}
                        color='white'
                      >
                        {item}
                      </Link>
                    ))}
                </Breadcrumbs>
              </Box>
            </Box>
            <div className='flex relative items-center h-12 p-5'>
              <div style={{ marginBottom: 0 }} className=' !mb-0'>
                <h1 className='pt-2 me-2 text-[1.2rem] font-bold '>Admin</h1>
              </div>

              <Avatar
                onClick={() => {
                  if (dropDown === false) {
                    setDropDown(true);
                  } else {
                    setDropDown(false);
                  }
                }}
              />
              {dropDown && (
                <div className='bg-white rounded-md absolute -bottom-10 right-16 !shadow-xxlarge border px-2 pt-2 '>
                  <h1 className='text-black text-md'>Logout</h1>
                </div>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <Link to='/'>
            <img
              src={logo}
              className='max-tablet:w-[135px] max-tablet:h-[20px] max-tablet:mr-5  w-[170px] h-7'
              alt=''
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {drawerItems.map((section, index) => (
          <React.Fragment key={index}>
            <List>
              {section.items.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.nestedItems ? (
                    <>
                      <ListItemButton
                        sx={{
                          minHeight: { sx: 45, sm: 55, md: 60 },
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                          "& .MuiListItemText-root .MuiTypography-root": {
                            fontSize: { sx: 14, sm: 16, lg: 16 },
                            fontWeight: 400,
                          },
                          "& .MuiListItemIcon-root svg": {
                            //   color: colors.primary.dark,
                            width: "20px",
                            height: "20px",
                          },
                          "& .MuiListItemIcon-root svg:focus": {
                            //   color: colors.secondary.light,
                            width: "20px",
                            height: "20px",
                          },
                          "&:focus": {
                            backgroundColor: "#EFF6FF",
                            boxShadow: "2px 2px 4px #00000033",
                            borderRight: "none",
                            "& .MuiListItemText-root": {
                              // color: colors.primary.main,
                            },
                            "&:active": {
                              backgroundColor: "#EFF6FF",
                              boxShadow: "2px 2px 4px #00000033",
                              borderRight: "none",
                              // color: colors.text.light,
                              "& .MuiListItemText-root": {
                                //   color: colors.primary.main,
                              },
                            },
                          },
                        }}
                        onClick={handleNestedClick}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                        {nestedOpen ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={nestedOpen} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                          {item.nestedItems.map((nestedItem, nestedIndex) => (
                            <Link to={nestedItem.link} key={nestedIndex}>
                              <ListItemButton
                                sx={{
                                  minHeight: { sx: 45, sm: 55, md: 60 },
                                  justifyContent: open ? "initial" : "center",
                                  px: 2.5,
                                  "& .MuiListItemText-root .MuiTypography-root":
                                    {
                                      fontSize: { sx: 14, sm: 16, lg: 16 },
                                      fontWeight: 400,
                                    },
                                  "& .MuiListItemIcon-root svg": {
                                    //   color: colors.primary.dark,
                                    width: "20px",
                                    height: "20px",
                                  },
                                  "& .MuiListItemIcon-root svg:focus": {
                                    //   color: colors.secondary.light,
                                    width: "20px",
                                    height: "20px",
                                  },
                                  "&:focus": {
                                    backgroundColor: "#EFF6FF",
                                    boxShadow: "2px 2px 4px #00000033",
                                    borderRight: "none",
                                    "& .MuiListItemText-root": {
                                      // color: colors.primary.main,
                                    },
                                    "&:active": {
                                      backgroundColor: "#EFF6FF",
                                      boxShadow: "2px 2px 4px #00000033",
                                      borderRight: "none",
                                      // color: colors.text.light,
                                      "& .MuiListItemText-root": {
                                        //   color: colors.primary.main,
                                      },
                                    },
                                  },
                                }}
                              >
                                <ListItemIcon style={{ marginLeft: 12 }}>
                                  {nestedItem.icon}
                                </ListItemIcon>
                                <ListItemText primary={nestedItem.text} />
                              </ListItemButton>
                            </Link>
                          ))}
                        </List>
                      </Collapse>
                    </>
                  ) : (
                    <Link to={item.link || "#"}>
                      <ListItem disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                          sx={{
                            minHeight: { sx: 45, sm: 55, md: 60 },
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                            "& .MuiListItemText-root .MuiTypography-root": {
                              fontSize: { sx: 14, sm: 16, lg: 16 },
                              fontWeight: 400,
                            },
                            "& .MuiListItemIcon-root svg": {
                              //   color: colors.primary.dark,
                              width: "20px",
                              height: "20px",
                            },
                            "& .MuiListItemIcon-root svg:focus": {
                              //   color: colors.secondary.light,
                              width: "20px",
                              height: "20px",
                            },
                            "&:focus": {
                              backgroundColor: "#EFF6FF",
                              boxShadow: "2px 2px 4px #00000033",
                              borderRight: "none",
                              "& .MuiListItemText-root": {
                                // color: colors.primary.main,
                              },
                              "&:active": {
                                backgroundColor: "#EFF6FF",
                                boxShadow: "2px 2px 4px #00000033",
                                borderRight: "none",
                                // color: colors.text.light,
                                "& .MuiListItemText-root": {
                                  //   color: colors.primary.main,
                                },
                              },
                            },
                          }}
                        >
                          <ListItemIcon
                            title={item.text}
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                          >
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.text}
                            sx={{
                              opacity: open ? 1 : 0,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </List>
            {index < drawerItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
