import React from "react"
import { connect } from "react-redux"
import StackGrid from "react-stack-grid"

import { getFetching, getData } from "store/entities/images"
import { IReduxState } from "store/entities"

import { GalleryItem } from "./GalleryItem"

interface IStateProps {
  fetching: IReduxState["images"]["fetching"]
  data: IReduxState["images"]["data"]
}

interface IProps extends IStateProps {}

export const Gallery: React.FC<IProps> = ({ data }) => (
  <StackGrid columnWidth={180}>
    {data.allIds.map(key => (
      <GalleryItem key={key} data={data.byId[key]} />
    ))}
  </StackGrid>
)

export default connect((state: IReduxState) => ({
  fetching: getFetching(state),
  data: getData(state),
}))(Gallery)
