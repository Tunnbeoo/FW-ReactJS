import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header className="sticky-top bg-white border">
        <div className="bg-success d-none d-sm-block">
          <div className="container text-white">
            <div className="row">
              <div className="col-md-6 pt-3">
                <p className="text-white fs-6">
                  <img
                    src="https://file.hstatic.net/1000402464/file/output-onlinegiftools_9bbbf15c266044699bca3a5635e05246.gif"
                    width="30px"
                    alt=""
                  />{" "}
                  Nền tảng đấu giá hàng đầu Việt Nam
                </p>
              </div>
              <div className="col-md-6 pt-3 d-flex align-items-end justify-content-end">
                <p>
                  <i className="bi bi-telephone-fill me"></i> HOTLINE: 0987654321{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-2 d-flex justify-content-between align-items-center">
          <nav className="navbar navbar-expand-lg bg-white ">
            <div className="container px-0 mx-0">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
                <Link href="/">
                  <a className="navbar-brand">
                    <span className="text-success">HPL</span>
                    <span>TRADE</span>
                  </a>
                </Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link text-black">Trang Chủ</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/gioithieu">
                      <a className="nav-link text-black">Giới thiệu</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sanpham">
                      <a className="nav-link text-black">Sản Phẩm Đấu Giá</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black">Tin Tức</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black">Liên hệ</a>
                  </li>
                </ul>
                <form className="d-flex ms-4" action="/timkiem">
                  <input
                    className="form-control me-2"
                    name="keyword"
                    placeholder="Nhập tên sản phẩm"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Tìm
                  </button>
                </form>
              </div>
            </div>
          </nav>
          <div className="d-flex align-items-center ms-5">
            <div
              id="cart"
              className="position-relative d-flex justify-content-center align-items-center rounded-circle bg-black bg-opacity-10 px-2 py-1 "
            >
              <Link href="/giohang">
                <a>
                  <i className="bi bi-cart fs-5 fw-bolder text-dark" />
                </a>
              </Link>
              <div>
                <span
                  id="amount-cart"
                  className="text-white position-absolute top-0 start-75 translate-middle bg-success px-2 rounded-circle"
                >
                  0
                </span>
              </div>
            </div>
            <div
              id="account"
              className="d-flex justify-content-center align-items-center rounded-circle bg-black bg-opacity-10  mx-2 px-2 py-1"
            >
              <Link href="/dangnhap">
                <a>
                  <i className="bi bi-person-circle fs-5 fw-bolder text-dark" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-9 m-0 p-0">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/img/img0.jpeg" 
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/img/img1.jpeg"  
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-3 m-0">
            <img className="img-fluid" src="/img/banner3.jpeg" alt="" /> {/* Đường dẫn tương đối */}
            <img className="img-fluid mt-2" src="/img/banner4.jpeg" alt="" /> {/* Đường dẫn tương đối */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
