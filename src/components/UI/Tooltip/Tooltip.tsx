import React from "react"

import { Tooltip as AntTooltip } from "antd"
import { TooltipProps as AntTooltipProps } from "antd/lib/tooltip"

interface IProps extends AntTooltipProps {}

export const Tooltip: React.FC<IProps> = ({ children, title }) => <AntTooltip title={title}>{children}</AntTooltip>
