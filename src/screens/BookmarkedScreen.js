import React from 'react';
import { Card, CardActions, CardContent, makeStyles, Typography,
    IconButton, Button } from '@material-ui/core';
import { style } from '../styles/Screens.Style';
import { useSelector } from 'react-redux';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles(style);

export default function BookmarkedScreen() {
    const classes = useStyles();

    //Gets bookmarked data from the Redux store
    const bookmarked =  useSelector((state) => state.bookmarker.bookmarks);

    return (
        <div className={classes.content}>

            <Typography className={classes.title} component="h2" variant="h6">
                Bookmarked Recipes
            </Typography>
            <div className={classes.resultsSection}>
                {bookmarked.length ? bookmarked?.map((recipe, index) => 
                    <Card key={`bm-${index}`} className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <img src={recipe["image"]} alt={recipe["label"]} />
                            <div>
                                <Typography component="h3" className={classes.cardTitle}>
                                    {recipe["label"]}
                                </Typography>
                                <p>Total calories: {Math.abs(parseInt(recipe["calories"]))}</p>
                            </div>
                        </CardContent>
                        <CardActions>
                            <IconButton
                            aria-label="bookmark">
                                <BookmarkIcon 
                                color="primary" />
                            </IconButton>
                            <Button>Learn more</Button>
                        </CardActions>
                    </Card>
                ): 
                <div className={classes.emptyMessage}>
                    No bookmarks have been added yet!
                </div>}
            </div>
        </div> 
    )
}