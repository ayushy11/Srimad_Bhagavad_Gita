import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia, Divider } from '@material-ui/core';
import '../styles/ChapterCard.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpeg';
import img14 from '../assets/img14.jpg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.jpg';
import img17 from '../assets/img17.jpg';
import img18 from '../assets/img18.jpg';

function ChapterCard({ key, id, name, meaning, summary, verseId}) {  

    return (
        <Card className="chapter__card">
            <CardActionArea>
                <CardMedia
                    className="chapter__cardmedia"
                    image={id===1 ? img1 : id===2 ? img2 : id===3 ? img3 : id===4 ? img4 : id===5 ? img5 : id===6 ? img6 : id===7 ? img7 : id===8 ? img8 : id===9 ? img9 : id===10 ? img10 : id===11 ? img11 : id===12 ? img12 : id===13 ? img13 : id===14 ? img14 : id===15 ? img15 : id===16 ? img16 : id===17 ? img17 : img18 }
                    title="Contemplative Reptile"
                />
                <CardContent className="chapter__cardcontent">
                    <Typography className="chapter__cardheading" gutterBottom variant="h7" component="h1">
                        Chapter {id} - {name}
                    </Typography>
                    <Divider />
                    <Typography className="chapter__cardheading" variant="h7" color="textSecondary"  component="h2">
                        {meaning}
                    </Typography>                    
                    <Typography className="chapter__cardheading"  color="textSecondary" component="h2">
                        Total verses - {verseId}
                    </Typography>
                    <Divider />
                    <Typography className="chapter__cardsummary" variant="body1" color="textSecondary" component="p">
                        {summary}
                    </Typography>
                </CardContent>
            </CardActionArea>            
        </Card>
    )
}

export default ChapterCard;
