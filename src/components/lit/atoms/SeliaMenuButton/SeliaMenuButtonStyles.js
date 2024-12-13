import { css } from 'lit'

export const seliaMenuButtonStyles = css`
  :host {
    display: block;
    width: inherit;
  }

  .menu-button {
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
    margin: 4px 8px;
  }

  .menu-button-lg {
    width: var(--w-btn-lg);
  }

  .menu-button-sm {
    width: var(--w-btn-sm);
    padding: 16px 28px;
  }

  .menu-button .menu-label {
    margin-left: 8px;
    font: 16px;
    line-height: 22px;
    weight: 600;
  }

  .menu-button.active {
    color: var(--selia-dark-purple);
    background-color: var(--selia-button-hover-bg);
  }
  .menu-button.active svg {
    fill: currentColor;
  }

  .menu-button:hover {
    background-color: var(--selia-button-hover-bg);
    color: var(--selia-light-purple);
  }

  .menu-button.inactive {
    color: var(--selia-grey);
    cursor: not-allowed;
    background-color: #dddddd;
  }

  .menu-button:hover svg {
    fill: currentColor;
  }

  .icon-container {
    order: 0;
  }

  .menu-label {
    order: 1;
  }

  .menu-button.expandable {
    justify-content: space-between;
  }

  .menu-button.expandable .icon-container {
    order: 1;
  }

  .menu-button.expandable .menu-label {
    order: 0;
    margin-left: 0;
  }
`
