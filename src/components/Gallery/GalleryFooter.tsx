import React from "react"
import { connect } from "react-redux"

import { getFetching } from "store/entities/images"
import { IReduxState } from "store/entities"
import logo from "assets/logo.svg"

import s from "./GalleryFooter.module.scss"

interface IStateProps {
  fetching: IReduxState["images"]["fetching"]
}

interface IProps extends IStateProps {}

export const GalleryFooter: React.FC<IProps> = ({ fetching }) =>
  fetching ? (
    <div className={s.container}>
      <img src={logo} className={s.spinner} alt="logo" />
    </div>
  ) : null

export default connect((state: IReduxState) => ({
  fetching: getFetching(state),
}))(GalleryFooter)
