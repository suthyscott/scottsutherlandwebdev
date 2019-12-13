import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#banner"
            >
              Scott Sutherland
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#one"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#two"
            >
              My Philosophy
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#three"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#four"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={e => {
                onMenuToggle();
              }}
              href="#footer"
            >
              contact
            </a>
          </li>
        </ul>
        <a
          className="close"
          onClick={e => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
