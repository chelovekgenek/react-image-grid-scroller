import * as React from "react"
import { connect } from "react-redux"
import StackGrid from "react-stack-grid"

import { IReduxState } from "store/entities"

import { Image } from "../UI"
import { buildPhotoUrl } from "helpers"
import { getFetching, getData } from "store/entities/images"

interface IStateProps {
  fetching: IReduxState["images"]["fetching"]
  data: IReduxState["images"]["data"]
}

interface IProps extends IStateProps {}

export const MainLayout: React.FC<IProps> = ({ data }) => (
  <div>
    <StackGrid columnWidth={180}>
      {data.allIds.map(key => (
        <Image key={key} src={buildPhotoUrl(data.byId[key])} />
      ))}
    </StackGrid>
  </div>
)

export default connect((state: IReduxState) => ({
  fetching: getFetching(state),
  data: getData(state),
}))(MainLayout)
