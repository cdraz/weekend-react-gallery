import { useState } from 'react';
import './GalleryItem.css';

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
                    showDescription ? <p>{item.description}</p> :
                    <img src={item.path} alt={item.description} />
                }
            </div>
            <button onClick={onLike}>Like</button>
            <p>{item.likes} Likes</p>
        </div>
    )
}

export default GalleryItem;