import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <div className='logo-container'>
          <img
            className='logo'
            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/586eb2a4-2bfc-4d6c-a977-7832b91b9c02/ddrcbsj-16539b24-38a5-4d6d-aaf2-58e31d93cfbb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU4NmViMmE0LTJiZmMtNGQ2Yy1hOTc3LTc4MzJiOTFiOWMwMlwvZGRyY2Jzai0xNjUzOWIyNC0zOGE1LTRkNmQtYWFmMi01OGUzMWQ5M2NmYmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0GML1845gZvUed_lc2fp9adF75uMpAkTg7vCnWvErlw'
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
