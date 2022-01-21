import { useEffect, useRef, useState } from 'react'

const ImageCard = ({ image }) => {
  const imageRef = useRef(null)
  const [imgCardSt, setImgCardSt] = useState({
    spans: 0,
  })
  const { description, urls } = image

  const setSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)

    setImgCardSt((prevState) => ({
      ...prevState,
      spans,
    }))
  }

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.addEventListener('load', setSpans)
    }
  })

  return (
    <div
      className="image-card"
      style={{
        gridRowEnd: `span ${imgCardSt.spans}`,
      }}
    >
      <img src={urls.regular} alt={description} ref={imageRef} />
    </div>
  )
}

export default ImageCard
