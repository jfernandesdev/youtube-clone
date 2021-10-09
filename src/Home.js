import { makeStyles } from '@material-ui/core';
import { BarraSuperior } from './components/BarraSuperior';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));

function Home(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <BarraSuperior />
    </div>
  );
}

export default Home;