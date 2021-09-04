import React, { useState } from 'react';
import { makeStyles, InputAdornment, TextField, Typography, Card, 
        CardContent, Button, CardActions, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { style } from '../styles/Screens.Style';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { recipesSetter } from '../store/recipesSlice';
import { bookmarker } from '../store/bookmarkSlice';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(style);

export default function SearchScreen() {
    const [searchVal, setSearchVal] = useState('');

    const ACCESS_POINT = 'https://api.edamam.com/api/recipes/v2?type=public&q=';

    const classes = useStyles();

    //Gets recipe and bookmarked data from the Redux store
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipesSetter.data );
    const bookmarked =  useSelector((state) => state.bookmarker.bookmarks);

    const bookmarkedSet = new Set(bookmarked); //Time efficient for determining whether card is bookmarked

    /***
     * Fetches data from the Recipe API and stores the data in Redux store
     */
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(`${ACCESS_POINT}${searchVal}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
            let data = await response.json();
            //This dispatches results to Redux so the results persist upon navigation
            dispatch(recipesSetter(data));
        } catch (err) {
            console.error('Could not bookmark:', err);
        }
    }

    /***
     * Adds bookmarked data to the Redux store
     */
    const handleBookmark = (recipeData) => {
        dispatch(bookmarker(recipeData));
    }

    return (
        <div className={classes.content}>
            <form onSubmit={handleSearch}>
                <TextField 
                    className={classes.searchBar}
                    onChange={(e) => setSearchVal(e.target.value)} 
                    placeholder="Search" variant="outlined"
                    InputProps={{startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>)
                    }}
                />
                <Button onClick={handleSearch} className={classes.searchBtn} variant="contained" 
                    color="primary" disableElevation>Search</Button>
            </form>
            <div>
                <Typography className={classes.title} component="h2" variant="h6">Results</Typography>
                <div className={classes.resultsSection}>
                    {JSON.stringify(recipes) !== '{}' ? 
                        <div>
                            {recipes["hits"]?.map((recipe, index) => 
                                <Card className={classes.card} key={`recipe-${index}`}>
                                    <CardContent className={classes.cardContent}>
                                        <img src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} />
                                        <div>
                                            <Typography component="h3" className={classes.cardTitle}>
                                                {recipe["recipe"]["label"]}
                                            </Typography>
                                            <p>Total calories: {Math.abs(parseInt(recipe["recipe"]["calories"]))}</p>
                                        </div>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton 
                                        onClick={() => handleBookmark(recipe["recipe"])} 
                                        aria-label="bookmark">
                                            <BookmarkIcon 
                                            color={bookmarkedSet.has(recipe["recipe"]) ? "primary" : "inherit"} />
                                        </IconButton>
                                        <Button>Learn more</Button>
                                    </CardActions>
                                </Card>
                            )}
                        </div> : 
                        <div className={classes.emptyMessage}>
                            So empty. Try searching for an ingredient; for example, "chicken"
                        </div>}
                </div>
            </div>
        </div>
    )

}