import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const tileData = [
    {
        img: 'https://material-ui.com/static/images/grid-list/bike.jpg',
        title: 'Bike',
        author: 'Suseel',
    },
    {
        img: "https://material-ui.com/static/images/grid-list/star.jpg",
        title: 'Star',
        author: 'not sure',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/olive.jpg',
        title: 'Olive',
        author: 'Achyut',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/mushroom.jpg',
        title: 'Mushroom',
        author: 'Nagendra',
    },
    {
        img: 'https://material-ui.com/static/images/grid-list/plant.jpg',
        title: 'Plant',
        author: 'Suseel',
    }
];

export default function SingleLineGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={4}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${tile.title}`}>
                                    <StarBorderIcon className={classes.title}/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
