import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AccessTime} from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';


const TourCard = ({ tour }) => {
  return (
    <Grid item xs={4}>
      <Paper elevation={1}>
        <img src={tour.image} alt="#" className='img' />
        <Box paddingX={2}>
          <Typography variant='h5' component='h2'>
            {tour.name}
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <AccessTime sx={{ width: 12.5 }} />
            <Typography variant='body2' component='p' marginLeft={0.5}>
              {tour.duration} hours
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}
            marginTop={3}>

            <Rating name="read-only" value={4.5} precision={0.5} readOnly size='small' />
            <Typography variant='body2' component='p' marginLeft={0.5}>
              {tour.rating}
            </Typography>
            <Typography variant='body2' component='p' marginLeft={0.5}>
              ({tour.numberOfReviews}) reviews
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6' component='h2'>
              From ${tour.price}
            </Typography>
            <Button variant='text' size='small' >Book Now</Button>
          </Box>

        </Box>
      </Paper>
    </Grid>
  )
}

export default TourCard