import { useState } from 'react';
import './GalleryItem.css';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function GalleryItem({item, likeGalleryItem}) {

    const onLike = () => {
        console.log('in onLike, ID of img: ', item.id);
        likeGalleryItem(item);
    }

    // Set variable for toggle description and declare function
    const [ showDescription, setShowDescription ] = useState(false);
    const toggleDescription = () => {
        console.log('in toggleDescription');
        setShowDescription(!showDescription);
        console.log('showDescription is now: ', showDescription);
    }

    return(
        <div className="itemDiv">
            <div className="imgDiv" onClick={toggleDescription}>
                { 
                    showDescription ? <p className="desc">{item.description}</p> :
                    <img src={item.path} alt={item.description} />
                }
            </div>
        <div className="likesDiv">
                <Button variant="outlined" onClick={onLike}>Like</Button>
                <p className="likes">{item.likes} Likes</p>
            </div>
        </div>
    )
}

export default GalleryItem;