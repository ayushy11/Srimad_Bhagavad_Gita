import React from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia, Divider } from '@material-ui/core';
import image from '../assets/imgverse.jpg';
import '../styles/VerseCard.css';

function VerseCard({ id, content, verse, meaning}) {
    return (       
            <Card className="verse__card">
                <CardActionArea>
                    <CardMedia     
                        className="verse__cardmedia"                   
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent >
                        <Typography className="verse__cardheading" gutterBottom variant="h7" component="h1">
                            Verse- {id} 
                        </Typography>
                        <Divider />                                              
                        <Typography className="verse__cardsummary" variant="h7" color="textSecondary" component="h2">
                            {verse}
                        </Typography>
                        <Divider />                                              
                        <Typography className="verse__cardsummary" variant="h7" color="textSecondary" component="h3">
                            {meaning}
                        </Typography>
                        <Divider />                                              
                        <Typography variant="body1" color="textSecondary" component="p">
                            {content}
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>                
            </Card>
    )
}

export default VerseCard
