import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// convert to module with props for skill list mapping
function CardMain() {
  return (
	<Card sx={{ maxWidth: 345}}>
		<CardMedia
			sx={{ height: 0, paddingTop: '56.25%' }}
			component="img"
			height="140"
			image={require('../assets/images/bg7.jpg')}
			title="Learning Journey"
		/>
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			</Typography>
			<Typography variant="body2" color="textSecondary" component="p">
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" color="primary">
			</Button>
		</CardActions>
	</Card>
  )
}

export default CardMain
