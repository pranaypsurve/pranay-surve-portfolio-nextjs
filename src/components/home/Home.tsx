"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";

export default function Home() {
  return (
    <>
      <section className="homeBanner" id="gradient">
        <div id="stars"></div>
        <div className="text-center">
          <h1 className="writerHead" style={{ fontFamily: "Changa" }}>
            <span className="bannerTitle text-white">Pranay Surve</span>
            <br />
            <p
              className="text-white m-0 banner_desc"
              style={{ fontSize: "30px" }}
            >
              Passionate about changing the world with technology.
            </p>
            <br />
            <span className="writerText typer-pranay-message text-white">
              I am&nbsp;
            </span>
            <span className="writerText typer-pranay-message text-white">
              <Typewriter
                options={{
                  strings: [
                    "a web developer",
                    "Software Engineer",
                    "Proud Indian",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <div className="text-center">
            <Button>
              <Link className="btn btn-light" href="#aboutme">
                More about me
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="" style={{ padding: "6% 15px", background: "white" }}>
        <div className="" id="aboutme">
          <div className="grid md:grid-cols-2 gap-4">
            <div className=" text-center align-self-center">
              <Image
                className="border border-secondary rounded-full m-auto"
                src="/assets/images/developer_pranay_surve.jpg"
                alt="profilepicture"
                width="375"
                height="375"
              />
            </div>
            <div className="text-center">
              <h1 className="text-center text-black text-2xl">My Self</h1>
              <br />
              <p className="lead text-center" style={{ fontSize: "22px" }}>
                {` My name is Pranay Surve. I’m a graduate of 2019 from Atharva
                Institute of Information Technology at Mumbai with a degree in
                Bachelor of Computer Application. I'm most passionate about
                giving back to the community, and my goal is to pursue this
                passion within the field of software engineering. In my free
                time I like working on open source projects.`}
              </p>
              <Button className="mt-3">
                <Link className="btn btn-secondary" href="/about">
                  Know My Skills
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        className=""
        style={{ display: "none", padding: "45px 15px", background: "#1a4e5b" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <h1>1600</h1>
              <h5>lines of code</h5>
            </div>
            <div className="col-md-3 text-center">
              <h1>166</h1>
              <h5>cups of coffee drunk</h5>
            </div>
            <div className="col-md-3 text-center">
              <h1>301 783 509</h1>
              <h5>pixels rendered</h5>
            </div>
            <div className="col-md-3 text-center">
              <h1>6</h1>
              <h5>projects completed</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
