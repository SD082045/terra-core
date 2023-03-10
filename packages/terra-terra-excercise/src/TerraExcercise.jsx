import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './TerraExcercise.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'Red Button',
};

const TerraExcercise = ({ name, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const TerraExcerciseClassNames = classNames(
    cx([
    'terra-excercise',
    theme.className,
  ]),
    customProps.className,
  );

  return (<button {...customProps} className={TerraExcerciseClassNames}>{name}</button>);
};

TerraExcercise.propTypes = propTypes;
TerraExcercise.defaultProps = defaultProps;

export default TerraExcercise;
