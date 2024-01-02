import React from "react";
import SqlAlquemy from "../tecnologies/sqlAlquemy.jpeg";
import ReactPic from "../tecnologies/react.png";
import JavaScriptPic from "../tecnologies/javascript.png";
import Story from "../tecnologies/story.png";
import PythonPic from "../tecnologies/python.jpeg";
import HtmlPic from "../tecnologies/html.png";
import CssPic from "../tecnologies/css.png";
import Tail from "../tecnologies/tail.png";
import BootstrapPic from "../tecnologies/bootstrap.jpeg";
import DockerPic from "../tecnologies/docker.png";
import NextjsPic from "../tecnologies/nextjs.png";
import MongoPic from "../tecnologies/mongo.png";
import GitPic from "../tecnologies/git.png";
import ApiPic from "../tecnologies/api.png";
import GraphqlPic from "../tecnologies/graphql.png";
import VuePic from "../tecnologies/vue.jpeg";
import NodePic from "../tecnologies/node.png";
import BitPic from "../tecnologies/bitbucket.png";
import AwsPic from "../tecnologies/aws.png";
import FlaskPic from "../tecnologies/flask.png";

const TechnologiesSection = () => {
  return (
    <>
      <div id="technologies" className="techno_div flex justify-end">
        <h1 className="flex justify-start">Skills</h1>
        <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="grid grid-cols-1 m-4">
               <h2 className="grid row-span-1 m-3">Front End</h2>
               <hr />
               <hr className="mb-2" />
               <div className="grid row-span-5 grid-cols-6 gap-2">
               <img src={HtmlPic} alt="Html" className="col-span-1 techno_pics" />
                <img src={CssPic} alt="css" className="col-span-1 techno_pics" />
                <img src={JavaScriptPic} alt="javascript" className="col-span-1 techno_pics" />
                <img src={ReactPic} alt="react" className="col-span-1 techno_pics" />
                <img src={NextjsPic} alt="nextjs" className="col-span-1 techno_pics" />
                <img src={VuePic} alt="vue" className="col-span-1 techno_pics" style={{width: "90px"}} />
                <img src={Story} alt="storybook" className="col-span-1 techno_pics" />
                <img src={Tail} alt="tailwindcss" className="col-span-1 techno_pics" />
                <img src={BootstrapPic} alt="bootstrap" className="col-span-1 techno_pics" />
                
               </div>
         </div>
        <div className="grid grid-cols-1 m-4">
          <h2 className="grid row-span-1 m-3">Back End</h2>
          <hr />
          <hr className="mb-2" />
          <div className="grid row-span-5 grid-cols-6 gap-2">
            <img src={PythonPic} alt="Python" className="col-span-1 techno_pics" />
            <img src={FlaskPic} alt="flask" className="col-span-1 techno_pics" />
            <img src={NodePic} alt="node" className="col-span-1 techno_pics" />
            <img src={SqlAlquemy} alt="sqlAlquemy" className="col-span-1 techno_pics" style={{width: "90px"}} />
            <img src={MongoPic} alt="mongo" className="col-span-1 techno_pics" />
            <img src={ApiPic} alt="api" className="col-span-1 techno_pics" style={{width: "90px"}} />
            <img src={GraphqlPic} alt="graphql" className="col-span-1 techno_pics" />
            <img src={AwsPic} alt="aws" className="col-span-1 techno_pics" style={{width: "90px"}} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 m-4">

        <h2 className="grid row-span-1 m-3">Version Control</h2>
        <hr />
        <hr className="mb-2" />
        <div className="grid row-span-4 grid-cols-4 gap-4">
          <img src={GitPic} alt="git" className="col-span-1 techno_pics" />
          <img src={DockerPic} alt="Docker" className="col-span-1 techno_pics" style={{width: "110px"}} />
          <img src={BitPic} alt="bitbucket" className="col-span-1 techno_pics" style={{width: "90px"}} />
      </div>
      </div>
      </div>

    </>
  );
};

export default TechnologiesSection;
