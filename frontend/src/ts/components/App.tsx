import * as React from "react";
import Banner from "./Banner/Banner";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const HelloWorld = (props: HelloWorldProps) => (
         <h1>
           Hi {props.userName} from React! Welcome to {props.lang}!
           <Banner name={"Kamileg"} />
         </h1>
       );
