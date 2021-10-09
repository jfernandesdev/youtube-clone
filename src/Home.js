import { makeStyles } from '@material-ui/core';
import { BarraSuperior } from './components/BarraSuperior';
import { MenuLateral } from './components/MenuLateral';

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
      <MenuLateral />
    </div>
  );
}

export default Home;