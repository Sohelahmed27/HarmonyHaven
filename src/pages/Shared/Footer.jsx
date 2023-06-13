import logo from "../../assets/Yuga -logo.jpg";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10   text-lg text-white font-bold bg-[#090580] ">
        <div>
          <img src={logo} alt="" />
          <div>
            Harmony Haven.
            <br />
            <div className="footer-content">
              <p>123 Main Street, City, State, Country</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: info@harmonyHaven.com</p>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Yoga</a>
          <a className="link link-hover">Meditation</a>
          <a className="link link-hover">Counselling</a>
          <a className="link link-hover">Charity</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-white font-bold bg-[#090580]  ">
        <div>
          <p>Copyright © 2023 - All right reserved by Harmony Haven Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
