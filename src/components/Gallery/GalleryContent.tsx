import React from "react"
import { connect } from "react-redux"
import StackGrid from "react-stack-grid"

import { getData } from "store/entities/images"
import { IReduxState } from "store/entities"

import { GalleryItem } from "./GalleryItem"

interface IStateProps {
  data: IReduxState["images"]["data"]
}

interface IProps extends IStateProps {}

export const GalleryContent: React.FC<IProps> = ({ data }) => (
  <StackGrid columnWidth={180} duration={0} monitorImagesLoaded>
    {data.allIds.map(key => (
      <GalleryItem key={key} data={data.byId[key]} />
    ))}
  </StackGrid>
)

export default connect((state: IReduxState) => ({
  data: getData(state),
}))(GalleryContent)
