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

export const GalleryHeader: React.FC<IProps> = ({ pagination, itemsAmount }) => (
  <Row>
    <Col lg={{ span: 8, offset: 20 }} xs={{ span: 8, offset: 16 }}>
      <span>
        {pagination.page} / {pagination.pages} (unique: {itemsAmount})
      </span>
    </Col>
  </Row>
)

export default connect((state: IReduxState) => ({
  pagination: getPagination(state),
  itemsAmount: getItemsAmount(state),
}))(GalleryHeader)
