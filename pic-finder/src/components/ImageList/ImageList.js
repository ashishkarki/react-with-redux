function ImageList({ images = [] }) {
  return (
    <div className="ui grid">
      {images.map((image) => (
        <div className="ui card" key={image.id}>
          <div className="image">
            <img src={image.urls.regular} alt={image.alt_description} />
            {/* <div className="ui dimmer">
              <div className="content">
                <div className="center">
                  <a
                    href={image.links.html}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="large eye icon" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

// import ImageCard from '../ImageCard/ImageCard'

// const ImageList = ({ images }) => {
//   const mappedImages = images.map((image) => {
//     // return (
//     //   <img
//     //     src={image.urls.regular}
//     //     alt={image.alt_description}
//     //     key={image.id}
//     //   />
//     // )
//     return <ImageCard key={image.id} image={image} />
//   })

//   return <div className="image-list">{mappedImages}</div>
// }

export default ImageList
