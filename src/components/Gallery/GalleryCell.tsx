import React from "react"

import { Image, Card, Tooltip } from "components/UI"
import { buildPhotoUrl } from "helpers"
import { GridChildComponentProps } from "react-window"
import { IReduxState } from "store/entities"

import s from "./GalleryCell.module.scss"

interface IProps extends GridChildComponentProps {
  columnCount: number
  data: IReduxState["images"]["data"]
}

export const GalleryCell: React.FC<IProps> = ({ data, style, rowIndex, columnIndex, columnCount }) => {
  const cellIndex = rowIndex * columnCount + columnIndex
  const id = data.allIds[cellIndex]
  if (!id) return null
  const cellData = data.byId[id]
  const src = buildPhotoUrl(cellData)
  return (
    <div style={style}>
      <Tooltip title={src}>
        <div>
          <Card title={cellData.title} cover={<Image src={src} alt={cellData.title} />} className={s.cell} />
        </div>
      </Tooltip>
    </div>
  )
}
