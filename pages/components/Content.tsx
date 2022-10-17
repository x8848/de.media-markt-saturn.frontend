import classNames from "classnames";
import { FC } from "react";
import style from "../../styles/Content.module.scss";
import { ReactProps } from "../../utils/types";

const Content: FC<ReactProps> = ({ children, className }) => {
  return (
    <div className={style.container}>
      <div className={classNames(className, style.content)}>{children}</div>
    </div>
  );
};

export default Content;
