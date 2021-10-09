import { makeStyles, Box, Hidden } from '@material-ui/core';

import { BarraSuperior } from './components/BarraSuperior';
import { MenuLateral } from './components/MenuLateral';
import { ContentVideoList } from './components/ContentVideoList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      height: 36,
      borderRadius: 8,
      background: '#cfcfcf',
    }
  },
}));

function Home(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <BarraSuperior />
      <Box display="flex">
        <Hidden mdDown>
          <MenuLateral />
        </Hidden>
        <ContentVideoList />
      </Box>
    </div>
  );
}

export default Home;