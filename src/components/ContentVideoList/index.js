import { 
  // makeStyles,
  Box,
  Toolbar,
  Typography,
  Grid,
  Avatar,
} from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
  
// }))

const arrayVideos = [];
for(let i=1; i<=100; i++){
  arrayVideos.push({
    id: i,
    title: `Eu sou apenas um vídeo genérico de nº ${i}`,
    channel: 'Jeferson Fernandes',
    views: '21 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpg',
    thumb: `https://picsum.photos/400/250/?random=${i}`,
  })
}

export function ContentVideoList() {
  return (
    <Box p={5} pl={9}>
      <Toolbar />
      <Typography
        variant='h6'
        color='textPrimary'
        style={{ fontWeight: 600, marginBottom: 16}}
      >
        Recomendados
      </Typography>

      <Grid container spacing={4}>
       {arrayVideos.map((item, index)=>(
         <Grid item key={index} lg={3} md={4} sm={6} xs={12} style={{marginBottom: 22, cursor:'pointer'}}>
            <Box>
              <img 
                style={{width: '100%'}}
                src={item.thumb} 
                alt={item.title}
              />
              <Box display='flex'>
               
                <Avatar  src={item.avatar} alt={item.title} style={{marginTop: 5}}/>
              
                <Box pl={3} pr={5}>
                  <Typography
                    style={{fontWeight: 600}}
                    gutterBottom
                    variant='body1'
                    color='textPrimary'
                  >
                    {item.title}
                  </Typography>
                
                  <Typography
                    display='block'
                    variant='body2'
                    color='textSecondary'
                  >
                  {item.channel}
                  </Typography>
                  <Typography variant='body2' color='textSecondary'>
                    {item.views} • <br /> {item.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
        </Grid>
       ))}
      </Grid>
    </Box>
  )
}