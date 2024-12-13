import { css } from 'lit'

export const seliaExpandableMenuButtonStyles = css`
  :host {
    width: inherit;
  }

  .submenu {
    transition: height 0.3s ease;
  }

  .submenu selia-menu-button::part(menu-button) {
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  .submenu selia-menu-button::part(menu-button).menu-button-sm {
    padding: 10px 28px;
  }
`
