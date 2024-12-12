import { css } from 'lit'

export const seliaDrawerStyles = css`
  :host {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    border: #dde1e9;
    background-color: #ffffff;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
    transition: width 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 1000;
  }

  :host([isOpen]) {
    width: 260px;
  }

  :host(:not([isOpen])) {
    width: 88px;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .menu-header {
    padding: 10px 32px;
    border-bottom: 2px solid var(--selia-separator-color);
  }

  .menu-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 0.25rem 0;
    cursor: pointer;
    font-size: 16px;
    line-height: 22px;
    color: #3e4047;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .menu-item:hover {
    background-color: #f3eefc;
  }

  .menu-item.selected {
    background-color: #f3eefc;
    color: #8350e6;
  }

  .menu-icon {
    margin-right: 1rem;
    font-size: 1.25rem;
  }

  .section-header {
    font-weight: bold;
    margin: 1rem 0 0.5rem;
    color: #666;
    text-transform: uppercase;
    font-size: 0.85rem;
  }

  :host([isOpen]) .toggle-button {
    width: 244px;
    height: 48px;
    background: #f4f4f4;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
  }

  :host(:not([isOpen])) .toggle-button {
    background-color: #f4f4f4;
    width: 72px;
    height: 48px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
  }

  .toggle-button:hover {
    background: #e0e0e0;
  }

  .footer {
    position: absolute;
    bottom: 8px;
    margin: 0 8px;
    text-align: center;
    font-size: 0.8rem;
    color: #aaa;
  }

  :host(:not([isOpen])) .footer span {
    display: none;
  }

  selia-menu-button:last-of-type {
    border-bottom: 2px solid var(--selia-separator-color);
  }

  @media (max-width: 768px) {
    :host([isOpen]) {
      width: 100%;
    }
  }
`