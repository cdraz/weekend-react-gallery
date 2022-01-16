import './GalleryItem.css';

function GalleryItem({item, likeGalleryItem}) {

    const onLike = () => {
        console.log('in onLike, ID of img: ', item.id);
        likeGalleryItem(item);
    }
    // const toggleDescription = () =>{

    // }

    return(
        <div className="itemDiv">
            <div className="imgDiv">
                <img src={item.path} alt={item.description} />
            </div>
            <button onClick={onLike}>Like</button>
            <p>{item.likes} Likes</p>

        </div>
    )
}

export default GalleryItem;