import React from "react"
import { connect } from "react-redux"

import { Grid } from "components/UI"
import { getPagination, getItemsAmount } from "store/entities/images"
import { IReduxState } from "store/entities"

const { Row, Col } = Grid

interface IStateProps {
  pagination: IReduxState["images"]["pagination"]
  itemsAmount: number
}
interface IProps extends IStateProps {}

export const GalleryHeader: React.FC<IProps> = ({ pagination: { page, pages, perpage }, itemsAmount }) => (
  <Row>
    <Col lg={{ span: 8, offset: 16 }} xs={{ span: 24 }}>
      <span>
        {page} / {pages} (unique: {page * perpage} | total: {itemsAmount})
      </span>
    </Col>
  </Row>
)

export default connect((state: IReduxState) => ({
  pagination: getPagination(state),
  itemsAmount: getItemsAmount(state),
}))(GalleryHeader)
