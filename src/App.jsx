import './App.css'
import TourCard from './components/TourCard'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './components/ButtonAppBar';
import cities from './data.json';
import Typography from '@mui/material/Typography';
import ColorAlerts from './components/ColorAlerts';
  
export default function App() {
  return (
    <div className='App'>
        <ButtonAppBar/>
    <Container sx={{marginY:2}}>
      <ColorAlerts />
       {cities.map((city)=>(
      <>
        <Typography
          variant='h4'
          component='h2'
          marginTop={5}
          marginBottom={3}
          >
          Top {city.name} Tours  
        </Typography>
         <Grid container spacing={2}>
        {city.tours.map((tour,index)=>(
        <TourCard tour={tour} key={index}/>
        ))
        }
      </Grid>
      </>
        ))}
      </Container>
      </div>
  )
}