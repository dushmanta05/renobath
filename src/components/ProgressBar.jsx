import { Box } from '@mui/material'
import React from 'react'

const ProgressBar = ({done}) => {
    const [style, setStyle] = React.useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 100);
  return (
    <Box className="progress">
		<Box className="progress-done" style={style}>
		</Box>
	</Box>
  )
}

export default ProgressBar