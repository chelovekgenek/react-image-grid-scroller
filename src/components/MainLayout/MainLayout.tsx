import * as React from "react"
import { connect } from "react-redux"
import StackGrid from "react-stack-grid"

import { IReduxState } from "store/entities"
import { getRecentRequest, TActionGetRecentRequest } from "store/entities/images"

import { Image } from "../UI"
import { buildPhotoUrl } from "helpers"

interface IStateProps {
  images: IReduxState["images"]
}
interface IDispatchProps {
  getImages: TActionGetRecentRequest
}
interface IProps extends IDispatchProps, IStateProps {}

export class MainLayout extends React.PureComponent<IProps> {
  componentDidMount() {
    this.props.getImages()
  }
  render() {
    const { data } = this.props.images
    return (
      <div>
        <StackGrid columnWidth={180}>
          {data.allIds.map(key => (
            <Image src={buildPhotoUrl(data.byId[key])} text="Learn React" />
          ))}
        </StackGrid>
      </div>
    )
  }
}

export default connect(
  (state: IReduxState) => ({
    images: state.images,
  }),
  {
    getImages: getRecentRequest,
  },
)(MainLayout)
