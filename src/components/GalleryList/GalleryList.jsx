import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({list}) {
    return(
        <>
        {
            list.map(item => (
                <GalleryItem key={item.id} item={item} />
            ))
        }
        </>
    )
}

export default GalleryList;