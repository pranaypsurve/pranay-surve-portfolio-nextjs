import React from "react";
import projects from "./projects";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const metadata = {
  title: "My Projects",
};
export default function Projects() {
  return (
    <section className="pb-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="text-center text-3xl">My Recent Works</h1>
          </div>
          <div className="grid md:grid-cols-3 gap-4 pt-5">
            {projects.map((item: any) => {
              return (
                <Card key={item + Math.random()}>
                  <CardHeader>
                    <CardTitle>
                      <Image
                        src={item.image}
                        height={"350"}
                        width={"300"}
                        className="m-auto card-img-top"
                        alt="..."
                      />
                    </CardTitle>
                    <CardDescription className="text-center">
                      {item.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center pb-2">
                      Technology: {item.technology}
                    </p>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      {item.desc}
                    </p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button>
                      <a
                        href={item.webLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        Visit Project
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                // <div className="col-md-4 mt-5" key={item + Math.random()}>
                //   <div
                //     className="card project-card-view"
                //     style={{ width: "18rem" }}
                //   >
                //     <Image
                //       src={item.image}
                //       height={"150"}
                //       width={"150"}
                //       className="card-img-top"
                //       alt="..."
                //     />
                //     <div className="card-body">
                //       <h5
                //         className="card-title text-center"
                //         style={{ fontWeight: "bold" }}
                //       >
                //         {item.name}
                //       </h5>
                //       <p className="text-center">Technology: {item.technology}</p>
                //       <p className="card-text" style={{ textAlign: "justify" }}>
                //         {item.desc}
                //       </p>
                //       <div className="text-center">
                //         <a
                //           href={item.webLink}
                //           target="_blank"
                //           rel="noreferrer"
                //           className="btn btn-primary"
                //         >
                //           Visit Project
                //         </a>
                //       </div>
                //     </div>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
