import React from "react";
import Link from "next/link";
const Button = (props) => {
  return (
    <Link className="btn btn-primary" href={props.link}>
      {props.children}
    </Link>
  );
};

export default Button;
