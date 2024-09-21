import {
  FaGithub,
  FaFreeCodeCamp,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 p-4 ">
      <div>
        <h1 className="text-xl">ladibanks1</h1>
      </div>
      <div>
        <ul className="flex icons text-xl">
          <li>
            <a href="https://github.com/ladibanks1">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.frontendmentor.io/profile/ladibanks1" className="text-white">
              <svg
                fill="#ffffff" 
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  <path d="M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z" />
                </g>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/ladibanks1/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ladibanks1/">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
