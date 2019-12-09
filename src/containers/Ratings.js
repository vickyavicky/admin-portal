import React from "react";
import "./Core.css";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card"


export default function Home() {
  return (
    <div className="container">
    <Card className="card" style={{ width: "50rem" }}>
      <CardHeader>Header</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
    </div>
  );

}


