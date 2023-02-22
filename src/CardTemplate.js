import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const CardTemplate = ({ userData }) => {
    const userList = userData.map((user) => {
        return (
            <Card sx={{ minWidth: 275 }} key={user.id}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        <>Name: <em>{user.name}</em></>
                    </Typography>
                    <Typography variant="h5" component="div">
                    <>Date of Birth: <em>{user.DOB}</em></>
                    </Typography>
                    <Typography variant="h5" component="div">
                    <>Email: <em>{user.email}</em></>
                    </Typography>
                    <Typography variant="h5" component="div">
                    <>Contact No.: <em>{user.contact}</em></>  
                    </Typography>
                    <Typography variant="h5" component="div">
                        <>Description: <em>{user.description}</em></>
                        <hr></hr>
                    </Typography>
                </CardContent>
            </Card>
        );
    })
    return (
        <div>
            {userList}
        </div>
    );
};

export default CardTemplate;

// export default function CardTemplate() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }