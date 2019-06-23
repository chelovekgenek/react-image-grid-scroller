import React from "react"
import { connect } from "react-redux"
import { FixedSizeGrid, GridChildComponentProps, GridOnItemsRenderedProps } from "react-window"
import AutoSizer from "react-virtualized-auto-sizer"
import InfiniteLoader from "react-window-infinite-loader"

import { Empty } from "components/UI"
import { getData, getItemsCount, getFetching, getRecentRequest, getHasNextPage } from "store/entities/images"
import { IReduxState } from "store/entities"

import { GalleryCell } from "./GalleryCell"
import s from "./GalleryContent.module.scss"

interface IDispatchProps {
  getImages: typeof getRecentRequest
}
interface IStateProps {
  fetching: ReturnType<typeof getFetching>
  data: ReturnType<typeof getData>
  hasNextPage: ReturnType<typeof getHasNextPage>
  itemsCount: ReturnType<typeof getItemsCount>
}

interface IProps extends IStateProps, IDispatchProps {}

export const GalleryContent: React.FC<IProps> = ({ data, itemsCount, fetching, getImages, hasNextPage }) =>
  itemsCount ? (
    <InfiniteLoader
      isItemLoaded={(index: number) => !hasNextPage || index < itemsCount}
      itemCount={itemsCount}
      loadMoreItems={getImages}
      style={{ height: "100%" }}
    >
      {({ onItemsRendered, ref }: IInfiniteLoaderProps) => {
        const newItemsRendered = ({
          overscanRowStartIndex,
          overscanColumnStopIndex,
          overscanRowStopIndex,
          visibleRowStopIndex,
        }: GridOnItemsRenderedProps) => {
          if (hasNextPage && !fetching && visibleRowStopIndex > overscanRowStopIndex - 1) {
            getImages()
          }
          onItemsRendered({
            visibleStartIndex: overscanRowStartIndex * overscanColumnStopIndex,
            visibleStopIndex: overscanRowStopIndex * overscanColumnStopIndex,
          })
        }
        return (
          <AutoSizer>
            {({ height, width }) => {
              const colCount = Math.floor(width / 200)
              const rowCount = Math.ceil(itemsCount / colCount)
              return (
                <FixedSizeGrid
                  ref={ref}
                  rowCount={rowCount}
                  rowHeight={320}
                  columnCount={colCount}
                  columnWidth={200}
                  useIsScrolling
                  height={height}
                  width={width}
                  itemData={data}
                  onItemsRendered={newItemsRendered}
                >
                  {(props: GridChildComponentProps) => <GalleryCell {...props} columnCount={colCount} />}
                </FixedSizeGrid>
              )
            }}
          </AutoSizer>
        )
      }}
    </InfiniteLoader>
  ) : (
    <div className={s.empty}>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </div>
  )

export default connect(
  (state: IReduxState) => ({
    fetching: getFetching(state),
    data: getData(state),
    hasNextPage: getHasNextPage(state),
    itemsCount: getItemsCount(state),
  }),
  {
    getImages: getRecentRequest,
  },
)(GalleryContent)
