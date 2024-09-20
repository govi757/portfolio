import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
export const Header = () => {
  const [isShadowVisbile, setShadowVisibility] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShadowVisibility(window.scrollY > 50);
    });
  }, []);

  const gotoSection = (id) => {
    const drawerClose = document.getElementById("drawerClose");
    drawerClose?.click();
    const specificElement = document.getElementById(id);
    window.scrollTo({
      top: specificElement.offsetTop - 100,
      behavior: "smooth",
    });
    
  };
  return (
    <div
      className={`d-flex appContainer align-items-center header ${
        isShadowVisbile && "headerActive"
      }`}
    >
      <div
        className="me-4 menu-button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasLeft"
        aria-controls="offcanvasLeft"
      >
        <RxHamburgerMenu color="#fff" />
      </div>
      <div
      data-bs-backdrop="true"
      style={{width:"98%"}}
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasLeft"
        aria-labelledby="offcanvasLeftLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasLeftLabel">Portfolio</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            id="drawerClose"
          ></button>
        </div>
        <div className="offcanvas-body">
        <div
        role="button"
        className="py-3"
        onClick={() => gotoSection("about-me")}
      >
        About
      </div>
      <div className="py-3" onClick={() => gotoSection("my-resume")}>My_Resume</div>
      <div className="py-3" onClick={() => gotoSection("my-projects")}>Projects</div>
      {/* <div className="py-3">Contact</div> */}
        </div>
      </div>
      <div
        role="button"
        className="header-item me-4"
        onClick={() => gotoSection("about-me")}
      >
        About
      </div>
      <div className="header-item mx-4" onClick={() => gotoSection("my-resume")} role="button">My_Resume</div>
      <div className="header-item mx-4" onClick={() => gotoSection("my-projects")} role="button">Projects</div>
      {/* <div className="header-item mx-4">Contact</div> */}
    </div>
  );
};
