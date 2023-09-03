import React from "react";

function Footer() {
  return (
    <section className="pt-5 pb-5" style={{ background: "azure" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center text-3xl">Get In Touch</h1>
          </div>
          <div className="col-md-12 mt-5">
            <div className="text-center text-break">
              <h4 className="text-2xl">
                {`I'm currently looking for full-time Software Engineering or
                React js opportunities! If you know of any positions available,
                if you have any questions, or if you just want to say hi, please
                feel free to email me at,`}
                <a href="mailto:pranaysurve51@gmail.com">
                  pranaysurve51@gmail.com
                </a>
                .
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
