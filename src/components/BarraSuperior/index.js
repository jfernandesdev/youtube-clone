import { 
  makeStyles, 
  AppBar,
  Toolbar,
  IconButton,
  Button } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
  },
  logo: {
    height: 26,
  },
  menuIcon: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(2),
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  }
}));

export function BarraSuperior() {
  const classes = useStyles();

  return (
    <AppBar color='inherit' className={classes.appBar}>
      <Toolbar>
        <IconButton edge='start' className={classes.menuIcon} color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>

        <img src="./images/logo-youtube-preto.png" alt="Logo do Youtube" className={classes.logo}/>

        <div className={classes.grow}/>

        <IconButton className={classes.icons} color='inherit'>
          <VideoCall />
        </IconButton>

        <IconButton className={classes.icons} color='inherit'>
          <Apps />
        </IconButton>

        <IconButton className={classes.icons} color='inherit'>
          <MoreVert />
        </IconButton>
        
        <Button variant='outlined' color='secondary' startIcon={<AccountCircle />} >
          Fazer Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}