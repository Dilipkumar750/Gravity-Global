import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <section className="d-flex align-items-center justify-content-between bg-orange-500 text-white py-2 px-3">
      <div className="d-flex align-items-center">
        <i className="fa-solid fa-envelope pe-2"></i>
        <a href="mailto:info@ultraflysolutions.com" className="text-white">
          info@ultraflysolutions.com
        </a>
      </div>
      <div>
        <a href="tel:+1562 5219684" className="text-white">
          +1 562 521 9684
        </a>
      </div>
      <div>
        <a href="tel:+919150001089" className="text-white">
          +91 91500 01089
        </a>
        <span className="mx-2">|</span>
        <a href="tel:+919150001090" className="text-white">
          +91 91500 01090
        </a>
      </div>
      <div className="d-none d-md-block">
        <Link to="/contact-us">
          <button
            className="btn btn-warning d-flex align-items-center justify-content-center shadow-lg"
            type="submit"
          >
            Contact Us
            <IoArrowForward className="ms-2" />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default TopHeader;
