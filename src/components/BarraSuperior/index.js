import { 
  makeStyles, 
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField,
  Box
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined  from '@material-ui/icons/SearchOutlined';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
   
  },
  logo: {
    height: 26,
  },
  menuIcon: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingRight: theme.spacing(5),
  },
  input1: {
    width: '40vw',
  },
}));

export function BarraSuperior() {
  const classes = useStyles();

  return (
    <AppBar color='inherit' className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box display='flex' alignItems='center'>
          <IconButton edge='start' className={classes.menuIcon} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>

          <img src="./images/logo-youtube-preto.png" alt="Logo do Youtube" className={classes.logo}/>
        </Box>

       
          <TextField
            id="standard-bare"
            size="small"
            variant="outlined"
            placeholder="Pesquisar"
            InputProps={{
              classes: {
                input: classes.input1 
              },
              endAdornment: (
                <IconButton>
                  <SearchOutlined />
                </IconButton>
              ),
            }}
          />
       

        {/* <div className={classes.grow}/> */}
        <Box>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}