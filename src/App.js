import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import WebIcon from "@material-ui/icons/Web";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CodeIcon from "@material-ui/icons/Code";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import BlockIcon from "@material-ui/icons/Block";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import Filter1Icon from "@material-ui/icons/Filter1";
import Filter2Icon from "@material-ui/icons/Filter2";
import Filter3Icon from "@material-ui/icons/Filter3";
import Filter4Icon from "@material-ui/icons/Filter4";

import {
  Calculator,
  Event,
  Files,
  Interface,
  Introduction,
  Layout,
  Game,
  Lockdown,
  CreateInterface,
  Automation,
  Test_1,
  Test_2,
  Test_3,
  Test_4,
} from "./components";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Электронное пособие "Основы программирование на Java"
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => setPage(0)}>
            <ListItemIcon>
              <EmojiPeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"Введение"} />
          </ListItem>
          <ListItem button onClick={() => setPage(1)}>
            <ListItemIcon>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary={"Обработка событий"} />
          </ListItem>
          <ListItem button onClick={() => setPage(2)}>
            <ListItemIcon>
              <WebIcon />
            </ListItemIcon>
            <ListItemText primary={"Проектирование интерфейса"} />
          </ListItem>
          <ListItem button onClick={() => setPage(3)}>
            <ListItemIcon>
              <ExposurePlus1Icon />
            </ListItemIcon>
            <ListItemText primary={"Создание калькулятора"} />
          </ListItem>
          <ListItem button onClick={() => setPage(4)}>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary={"Верстка"} />
          </ListItem>
          <ListItem button onClick={() => setPage(5)}>
            <ListItemIcon>
              <VideogameAssetIcon />
            </ListItemIcon>
            <ListItemText primary={"Игра"} />
          </ListItem>
          <ListItem button onClick={() => setPage(6)}>
            <ListItemIcon>
              <BlockIcon />
            </ListItemIcon>
            <ListItemText primary={"Приложение блокировки"} />
          </ListItem>
          <ListItem button onClick={() => setPage(7)}>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary={"Приложение автоматизации"} />
          </ListItem>
          <ListItem button onClick={() => setPage(8)}>
            <ListItemIcon>
              <SettingsOverscanIcon />
            </ListItemIcon>
            <ListItemText primary={"Создание интерфейса"} />
          </ListItem>
          <ListItem button onClick={() => setPage(9)}>
            <ListItemIcon>
              <InsertDriveFileIcon />
            </ListItemIcon>
            <ListItemText primary={"Работа с файлами"} />
          </ListItem>
        </List>
        <hr width={"100%"} />
        <List>
          <ListItem button onClick={() => setPage(10)}>
            <ListItemIcon>
              <Filter1Icon />
            </ListItemIcon>
            <ListItemText primary={"Тест №1"} />
          </ListItem>
          <ListItem button onClick={() => setPage(11)}>
            <ListItemIcon>
              <Filter2Icon />
            </ListItemIcon>
            <ListItemText primary={"Тест №2"} />
          </ListItem>
          <ListItem button onClick={() => setPage(12)}>
            <ListItemIcon>
              <Filter3Icon />
            </ListItemIcon>
            <ListItemText primary={"Тест №3"} />
          </ListItem>
          <ListItem button onClick={() => setPage(13)}>
            <ListItemIcon>
              <Filter4Icon />
            </ListItemIcon>
            <ListItemText primary={"Тест №4"} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/*main*/}
        {page === 0 && <Introduction />}
        {page === 1 && <Event />}
        {page === 2 && <Interface />}
        {page === 3 && <Calculator />}
        {page === 4 && <Layout />}
        {page === 5 && <Game />}
        {page === 6 && <Lockdown />}
        {page === 7 && <Automation />}
        {page === 8 && <CreateInterface />}
        {page === 9 && <Files />}
        {/*test*/}
        {page === 10 && <Test_1 />}
        {page === 11 && <Test_2 />}
        {page === 12 && <Test_3 />}
        {page === 13 && <Test_4 />}
      </main>
    </div>
  );
}

export default App;
