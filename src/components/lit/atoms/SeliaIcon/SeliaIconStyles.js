import { css } from 'lit'

export const styles = css`
  :host {
    display: inline-block;
    width: var(--selia-icon-size, 24px);
    height: var(--selia-icon-size, 24px);
    color: var(--selia-icon-color, inherit);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .icon svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`
