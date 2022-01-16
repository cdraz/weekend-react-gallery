import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({list, likeGalleryItem}) {
    return(
        <>
        {
            list.map(item => (
                <GalleryItem key={item.id} item={item} likeGalleryItem={likeGalleryItem}/>
            ))
        }
        </>
    )
}

export default GalleryList;