import './GalleryList.css';

function GalleryList({galleryList}) {
    return(
        <>
        {
            galleryList.map(item => (
                <GalleryItem key={item.id} item={item} />
            ))
        }
        </>
    )
}