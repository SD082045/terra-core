/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <g data-name="48" ><path d="M17.335 23.964l7.8-7.8L14.979 6H0v36h14.906l10.233-10.232zM13.664 39H3V9h10.736l7.16 7.16-5.435 5.44-.783-.784L6 29.49V36h10.664z" ></path><path d="M20.505 6l10.16 10.16-7.8 7.8 7.8 7.8L20.432 42H48V6zM45 39H27.675l3-3H42v-3.958l-7.678-7.678-3.409 3.409-3.813-3.809 7.8-7.8-.935-.935a3.477 3.477 0 00-3.2-3.2L27.747 9H45z" ></path></g>
    </IconBase>
  );
};

SvgIcon.displayName = "IconBrokenImage";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
