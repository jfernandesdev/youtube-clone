import { 
  makeStyles, 
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField,
  Box,
  Switch,
  FormControlLabel,
  Grid,
  Hidden
} from '@material-ui/core';

import { useTheme, styled } from '@material-ui/core/styles';

import { 
  Menu, AccountCircle, VideoCall, Apps, MoreVert, SearchOutlined 
}from '@material-ui/icons';


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
    flex: 1,
    paddingRight: theme.spacing(5),
  },
}));

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: '#fff',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: 'none',
    width: 20,
    height: 20,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export function BarraSuperior({darkMode, setDarkMode}) {
  const classes = useStyles();
  const theme = useTheme();

  function handleChangeDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <AppBar color='inherit' className={classes.appBar}>
      
      <Grid container>
        <Toolbar className={classes.toolbar}>
          <Grid item  lg={3} md={3} sm={3} xs={12}>
            <Box display='flex' alignItems='center'>
              <IconButton edge='start' className={classes.menuIcon} aria-label='menu'>
                <Menu />
              </IconButton>
              <img src={theme.palette.type === 'dark' ? './images/logo-youtube-branco.png' : './images/logo-youtube-preto.png'} alt="Logo do Youtube" className={classes.logo}/>
            </Box>
          </Grid>

          <Grid item  lg={5} md={5} sm={3} xs={12}>
            <Box display='flex' justifyContent='center'>
              <TextField
                id="standard-bare"
                size="small"
                fullWidth
                variant="outlined"
                placeholder="Pesquisar"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Grid>
       
          <Grid item  lg={4} md={4} sm={6} xs={12}>
            <Box display='flex' justifyContent='right'> 
              <FormControlLabel
                control={<MaterialUISwitch />}
                value={darkMode}
                onChange={handleChangeDarkMode} 
                className={classes.icons}
              />

              <Hidden mdDown>
                <IconButton className={classes.icons}>
                  <VideoCall />
                </IconButton>
              </Hidden>

              <IconButton className={classes.icons}>
                <Apps />
              </IconButton>

              <IconButton className={classes.icons}>
                <MoreVert />
              </IconButton>
              
              <Button 
                variant='outlined' 
                color='secondary' 
                startIcon={<AccountCircle />} 
                style={{whiteSpace: 'nowrap', minWidth: 'max-content'}}
                >
                Fazer Login
              </Button>
            </Box>
          </Grid>
          </Toolbar>
        </Grid>
    </AppBar>
  );
}