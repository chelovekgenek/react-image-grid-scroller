import React from "react"

import { Image, Card, Tooltip } from "components/UI"
import { IFlickrPhoto, buildPhotoUrl } from "helpers"

interface IProps {
  data: IFlickrPhoto
}

export const GalleryItem: React.FC<IProps> = ({ data }) => {
  const src = buildPhotoUrl(data)
  return (
    <Card
      title={data.title}
      cover={
        <Tooltip title={src}>
          <div>
            <Image src={src} alt={data.title} />
          </div>
        </Tooltip>
      }
    />
  )
}
