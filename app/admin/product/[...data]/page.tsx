import React from "react";

interface DataProps {
  params: {
    id: string;
  };
}

export default function Data(props: any) {
  return <div>{JSON.stringify(props)}</div>;
}
