import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <>
      <section className="aboutus">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2">
            <div className=" mt-5 mb-5">
              <h1
                className="text-center"
                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              >
                <strong className="purple">About Me</strong>
              </h1>
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Hi Everyone, I am{" "}
                  <span className="purple">Pranay Surve </span>
                  from <span className="purple"> Mumbai, India.</span>
                  <br />
                  Software Engineer who loves to transform ideas into reality
                  using code.
                  <br />
                  Motivated designer and developer with experience creating
                  custom websites with ReactJs, JavaScript, HTML5, CSS3.Using
                  ReactJs, Javascript, Php, Codeigniter, nodejs, Express js.
                  <br />
                  Apart from coding, some other activities that I love to do!
                </p>
                <ul className="">
                  <li className="about-activity">#Playing Games</li>
                  <li className="about-activity">#Travelling</li>
                  <li className="about-activity">
                    # Doing Research on Specific Topics
                  </li>
                </ul>
              </blockquote>
            </div>
            <div className=" mt-5 mb-5">
              <Image
                alt=""
                src="/assets/images/developer_pranay_surve.jpg"
                className="img-fluid rounded m-auto"
                height="250"
                width={250}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          paddingBottom: "10%",
          background: "white",
          color: "black",
          fontSize: "35px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center pt-5 pb-5">
                <h1>Skills</h1>
              </div>

              <Tabs defaultValue="account" className="w-full">
                <TabsList>
                  <TabsTrigger value="account">Technical Skills</TabsTrigger>
                  <TabsTrigger value="password">Soft Skills</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <Card>
                    <CardContent className="space-y-2">
                      <div className="grid md:grid-cols-2 py-3">
                        <div className="px-2">
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">Php</h3>
                            <Progress value={60} />
                          </div>
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">SQL</h3>
                            <Progress value={50} />
                          </div>
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">Node js</h3>
                            <Progress value={40} />
                          </div>
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">MongoDb</h3>
                            <Progress value={30} />
                          </div>
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">HTML5/CSS3/Bootstrap</h3>
                            <Progress value={80} />
                          </div>
                        </div>
                        <div>
                          <div className="px-2">
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">JavaScript</h3>
                              <Progress value={80} />
                            </div>
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">React</h3>
                              <Progress value={78} />
                            </div>
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">Express js</h3>
                              <Progress value={42} />
                            </div>
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">Codeigniter</h3>
                              <Progress value={40} />
                            </div>
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">Git/GitLab</h3>
                              <Progress value={60} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="password">
                  <Card>
                    <CardContent className="space-y-2">
                      <div className="grid md:grid-cols-2 py-3">
                        <div className="px-2">
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">Goal-Oriented</h3>
                            <Progress value={95} />
                          </div>
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">Collaboration</h3>
                            <Progress value={96} />
                          </div>
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">Positivity</h3>
                            <Progress value={95} />
                          </div>
                          <div className="py-2 text-2xl">
                            <h3 className="pb-2">Adaptability</h3>
                            <Progress value={88} />
                          </div>
                        </div>
                        <div>
                          <div className="px-2">
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">Problem Solving</h3>
                              <Progress value={92} />
                            </div>
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">Empathy</h3>
                              <Progress value={90} />
                            </div>
                            <div className="py-2 text-2xl">
                              <h3 className="pb-2">Creativity</h3>
                              <Progress value={80} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* <nav
                className="skills-tabs nav nav-tabs"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Technical Skills
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Soft Skills
                </button>
              </nav> */}
              {/* <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <p className="lead mb-1 mt-2">Php</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">SQL</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "45%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Node js</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "35%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">MongoDb</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "45%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">HTML5/CSS3/Bootstrap</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "88%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <p className="lead mb-1 mt-2">JavaScript</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">React</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Express js</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "40%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Codeigniter</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Git/GitLab</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <p className="lead mb-1 mt-2">Goal-Oriented</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Collaboration</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "96%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Positivity</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "95%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Adaptability</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "85%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div>
                        <p className="lead mb-1 mt-2">Problem Solving</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "97%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Empathy</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div>
                        <p className="lead mb-1 mt-2">Creativity</p>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "79%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
