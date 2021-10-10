import { 
  makeStyles, 
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider, 
  Box,
  Typography,
  Button,
  ListSubheader
} from '@material-ui/core';

import { 
  AccountCircle,
  Home, Whatshot, SubscriptionsOutlined, VideoLibraryOutlined, History,
  MusicNote, EmojiEvents, SportsEsports, LocalMovies, LibraryBooks, EmojiObjects, ThreeSixty,
  AddCircleOutline,
  SettingsOutlined, FlagOutlined, HelpOutlineOutlined, FeedbackOutlined
}  from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    overflowX: 'hidden',
    '@global': {
      '*::-webkit-scrollbar-track': {
      background: 'transparent'
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'transparent'
        }
    },
    '&:hover': {
      '@global': {
          '*::-webkit-scrollbar-thumb': {
            background: '#cfcfcf'
            }
      }
    }
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  drawerContainer: {  
    overflow: 'auto',
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: theme.spacing(7),
  },
  listItemText: {
    fontSize: 14,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  subheader: {
    color: 'rgb(96, 96, 96)',
    background: '#FFF',
    fontWeight: 'bold',
    paddingTop: theme.spacing(2),
    paddingBottom: 2,
    paddingLeft: theme.spacing(7),
  },
  itemIconBorder: {
    color: '#FFF',
    background: '#707070',
    borderRadius: '50%',
    padding: 3,
  }
}));

export function MenuLateral() {
  const classes = useStyles();

  const optionMenuPrimary = [
    {
      text: 'Início',
      icon: <Home />,
    },
    {
      text: 'Em alta',
      icon: <Whatshot />,
    },
    {
      text: 'Inscrições',
      icon: <SubscriptionsOutlined />,
    }
  ]

  const optionMenuSecondary = [
    {
      text: 'Biblioteca',
      icon: <VideoLibraryOutlined />,
    },
    {
      text: 'Histórico',
      icon: <History />,
    },
  ]

  const optionBestOnYoutube = [
    {
      text: 'Música',
      icon: <MusicNote className={classes.itemIconBorder}/>,
    },
    {
      text: 'Esportes',
      icon: <EmojiEvents className={classes.itemIconBorder}/>,
    },
    {
      text: 'Jogos',
      icon: <SportsEsports className={classes.itemIconBorder}/>,
    },
    {
      text: 'Filmes',
      icon: <LocalMovies className={classes.itemIconBorder}/>,
    },
    {
      text: 'Notícias',
      icon: <LibraryBooks className={classes.itemIconBorder}/>,
    },
    {
      text: 'Destaque',
      icon: <EmojiObjects className={classes.itemIconBorder}/>,
    },
    {
      text: 'Vídeo em 360º',
      icon: <ThreeSixty className={classes.itemIconBorder}/>,
    },
  ]

  const optionMenuConfig = [
    {
      text: 'Configurações',
      icon: <SettingsOutlined />,
    },
    {
      text: 'Histórico de denúncias',
      icon: <FlagOutlined />,
    },
    {
      text: 'Ajuda',
      icon: <HelpOutlineOutlined />,
    },
    {
      text: 'Enviar feedback',
      icon: <FeedbackOutlined />,
    },
  ]

  return (
    <Drawer 
      className={classes.drawer} 
      variant="permanent" 
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {optionMenuPrimary.map((item, index) => (
            <ListItem button key={ index } className={classes.listItem} selected={index === 0}>
              <ListItemIcon>{ item.icon }</ListItemIcon>
              <ListItemText 
                classes={{ primary: classes.listItemText }} 
                primary={ item.text} 
              />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {optionMenuSecondary.map((item, index) => (
            <ListItem button key={ index } className={classes.listItem}>
              <ListItemIcon>{ item.icon }</ListItemIcon>
              <ListItemText 
                classes={{ primary: classes.listItemText }} 
                primary={ item.text} 
              />
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box py={4} pr={6} pl={7}>
          <Typography variant='body2'>
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Box mt={2}>
            <Button 
              variant='outlined' 
              color='secondary' 
              startIcon={<AccountCircle />}>
              Fazer login
            </Button>
          </Box>
        </Box>
        
        <Divider />
        
        <List 
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={ 
            <ListSubheader
              component='div'
              id='nested-list-subheader'
              className={classes.subheader}
            >
              O MELHOR DO YOUTUBE
            </ListSubheader>
          }
        >
          {optionBestOnYoutube.map((item, index) => (
            <ListItem button key={ index } className={classes.listItem}>
              <ListItemIcon>{ item.icon }</ListItemIcon>
              <ListItemText 
                classes={{ primary: classes.listItemText }} 
                primary={item.text} 
              />
            </ListItem>
          ))}
        </List>
       
        <Divider />
          <ListItem button className={classes.listItem}>
            <ListItemIcon>{ <AddCircleOutline /> }</ListItemIcon>
            <ListItemText 
              classes={{ primary: classes.listItemText }} 
              primary= 'Procurar canais' 
            />
          </ListItem>
        <Divider />

        <List>
          {optionMenuConfig.map((item, index) => (
            <ListItem button key={ index } className={classes.listItem}>
              <ListItemIcon>{ item.icon }</ListItemIcon>
              <ListItemText 
                classes={{ primary: classes.listItemText }} 
                primary={ item.text} 
              />
            </ListItem>
          ))}
        </List>

        <Divider />

        <Box py={4} pr={6} pl={7}>
          <Typography variant='caption'>
            Feito com ❤ e ☕ por Jeferson Fernandes - 
            Direitos de imagem para Youtube
          </Typography>
        </Box>
      </div>
    </Drawer>
  );
}