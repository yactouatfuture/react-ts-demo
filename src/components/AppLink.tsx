import React from 'react';
import { Link } from "react-router-dom";

interface LinkInterface {
  label: string;
  path: string;
}

const AppLink = (props: LinkInterface) => {
  const {label, path} = props;

  return <Link to={path}>{label}</Link>
}

export default AppLink;