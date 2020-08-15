/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { Dropdown } from 'antd';
import React from 'react';
import styles from './dropdown.module.less';


const HeaderDropdown = ({ overlayClassName, ...restProps }) => (
  <Dropdown overlayClassName={`${styles.container} ${overlayClassName}`} {...restProps} />
);

export default HeaderDropdown;
