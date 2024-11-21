import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-[#71C9CE] flex justify-around p-10  text-base-content">
      <div>
        <span className="footer-title">About Us</span>
        <a className="link link-hover">Company Info</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54v-2.2c0-2.506 1.492-3.89 3.773-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.775-1.63 1.567v1.867h2.773l-.444 2.89h-2.329v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.935 9.935 0 01-2.827.775A4.94 4.94 0 0023.338 3.4c-.957.568-2.016.981-3.149 1.2a4.92 4.92 0 00-8.384 4.482A13.93 13.93 0 011.671 3.15a4.928 4.928 0 001.523 6.573A4.904 4.904 0 01.96 9.355v.064a4.923 4.923 0 003.95 4.827 4.932 4.932 0 01-2.212.084 4.93 4.93 0 004.6 3.42A9.867 9.867 0 010 19.54a13.903 13.903 0 007.548 2.212c9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636A10.006 10.006 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.2 0 3.584.013 4.849.07 1.259.057 2.007.243 2.475.41a4.998 4.998 0 011.833 1.048 4.998 4.998 0 011.048 1.833c.167.468.353 1.216.41 2.475.057 1.265.07 1.649.07 4.849s-.013 3.584-.07 4.849c-.057 1.259-.243 2.007-.41 2.475a4.998 4.998 0 01-1.048 1.833 4.998 4.998 0 01-1.833 1.048c-.468.167-1.216.353-2.475.41-1.265.057-1.649.07-4.849.07s-3.584-.013-4.849-.07c-1.259-.057-2.007-.243-2.475-.41a4.998 4.998 0 01-1.833-1.048 4.998 4.998 0 01-1.048-1.833c-.167-.468-.353-1.216-.41-2.475C2.176 15.584 2.163 15.2 2.163 12s.013-3.584.07-4.849c.057-1.259.243-2.007.41-2.475a4.998 4.998 0 011.048-1.833 4.998 4.998 0 011.833-1.048c.468-.167 1.216-.353 2.475-.41C8.416 2.176 8.8 2.163 12 2.163m0-2.163C8.754 0 8.331.014 7.052.072 5.769.13 4.885.281 4.091.54 3.289.8 2.549 1.231 1.853 1.927c-.696.696-1.127 1.436-1.387 2.238-.259.794-.41 1.678-.468 2.961C.014 8.331 0 8.754 0 12c0 3.246.014 3.669.072 4.948.058 1.283.209 2.167.468 2.961.259.802.691 1.542 1.387 2.238.696.696 1.436 1.127 2.238 1.387.794.259 1.678.41 2.961.468C8.331 23.986 8.754 24 12 24c3.246 0 3.669-.014 4.948-.072 1.283-.058 2.167-.209 2.961-.468.802-.259 1.542-.691 2.238-1.387.696-.696 1.127-1.436 1.387-2.238.259-.794.41-1.678.468-2.961.058-1.279.072-1.702.072-4.948 0-3.246-.014-3.669-.072-4.948-.058-1.283-.209-2.167-.468-2.961-.259-.802-.691-1.542-1.387-2.238-.696-.696-1.436-1.127-2.238-1.387-.794-.259-1.678-.41-2.961-.468C15.669.014 15.246 0 12 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
