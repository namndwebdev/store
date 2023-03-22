import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-promotion">
          <form action="" className="footer-promotion__form">
            <div className="left-footer">
              <img
                src="https://theme.hstatic.net/1000026716/1000440777/14/bg-register.png"
                alt=""
              />
              <span style={{ marginLeft: "30px" }}>
                Mua hàng online với nhiều ưu đãi tại GEARVN
              </span>
            </div>
            <div className="footer-register" style={{ marginLeft: "auto" }}>
              <input
                type="text"
                className="footer-input__field"
                placeholder="Nhập email của bạn"
              />
              <button className="footer-button__register">Đăng ký</button>
            </div>
          </form>
        </div>
        <div
          className="footer-info"
          style={{
            backgroundColor: "#f6f6f6",
            width: "100%",
            padding: "20px 0",
          }}
        >
          <div className="footer-info__wrap">
            <div className="footer-info__left">
              <h3>CÔNG TY TNHH THƯƠNG MẠI GEARVN</h3>
              <h3>EMAIL: CSKH@GEARVN.COM</h3>
              <p>
                <b>HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ:</b> (Làm việc từ 08h00 - 21h00)
              </p>
            </div>
            <div className="footer-info__middle">
              <p>
                <a href="" style={{color:'#428bca',textDecoration:'none'}}><b>Hệ thống cửa hàng</b></a>
              </p>
            </div>
            <div className="footer-info__right">
              <h3>aHFAHEUFHAUWIEFU</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
