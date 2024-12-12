import { css } from 'lit'

export const seliaMenuButtonStyles = css`
  :host {
    display: block;
    width: 100%;
  }

  .menu-button {
    width: var(--w-100);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    gap: 8px;
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: none;
    background: #ffffff;
    line-height: 22px;
  }

  .menu-button .menu-label {
    margin-left: 8px;
    font: 16px;
    line-height: 22px;
    weight: 600;
  }

  .menu-button.active {
    color: var(--selia-purple);
  }
  .menu-button.active svg {
    fill: currentColor;
  }

  .menu-button:hover {
    background-color: #e6d5ff;
    border-color: #b08fdf;
  }

  .icon-container {
    order: 0;
  }

  .menu-label {
    order: 1;
  }

  .menu-button.expandable {
    justify-content: space-between;
    border-bottom: 2px solid var(--selia-separator-color);
  }

  .menu-button.expandable .icon-container {
    order: 1;
  }

  .menu-button.expandable .menu-label {
    order: 0;
    margin-left: 0;
  }
`
