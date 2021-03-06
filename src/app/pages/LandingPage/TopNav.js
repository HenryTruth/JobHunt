const TopNav = () => {
  return (
    <div className="pre-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-8 col-7">
            <ul className="info">
              <li>
                <a href="#">
                  <i className="fa fa-envelope"></i>support@owerrijobhunt.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-phone"></i>010-020-0340
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-4 col-5">
            <ul className="social-media">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-behance"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TopNav;
