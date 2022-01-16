import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function GalleryList({list, likeGalleryItem}) {
    return(
        <ImageList sx={{ width: 800, height: 800 }} className="list">
        {
            list.map(item => (
                <ImageListItem key={item.id}>
                    <GalleryItem key={item.id} item={item} likeGalleryItem={likeGalleryItem}/>
                </ImageListItem>
            ))
        }
        </ImageList>
    )
}

export default GalleryList;