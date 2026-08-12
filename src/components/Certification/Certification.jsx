import "./Certification.css";

import { useState } from "react";
import { HiOutlineEye } from "react-icons/hi2";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Certification() {

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      image: "/AWS-certificate.jpg",
    },
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      image: "/CCNA-certificate.png",
    },
    {
      title: "EF SET English Certificate",
      issuer: "EF SET",
      image: "/EFSET-certificate.jpg",
    },
  ];

  return (

    <section id="certifications" className="certifications">

      <h2 className="certifications-title">
        Certifications
      </h2>

      <div className="certificate-container">

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            601: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            901: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="certificate-swiper"
        >

          {certificates.map((certificate, index) => (

            <SwiperSlide key={index}>

              <div
                className="certificate-card"
                onClick={() =>
                  setSelectedCertificate(certificate.image)
                }
              >

                <img
                  src={certificate.image}
                  alt={certificate.title}
                />

                <div className="certificate-content">

                  <h3>{certificate.title}</h3>

                  <p>{certificate.issuer}</p>

                  <span className="view-btn">
                    <HiOutlineEye />
                    View Certificate
                  </span>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>


      {/* Certificate Popup */}

      {selectedCertificate && (

        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="certificate-popup"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="certificate-image-wrapper">

              <button
                className="close-btn"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>

              <img
                src={selectedCertificate}
                alt="Certificate"
              />

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Certification;