import React from 'react';
import SuccessfulOrder from "@/components/sections/order/SuccessfulOrder/SuccessfulOrder";
import Copyright from "@/components/Copyright/Copyright";

interface OwnProps {
  searchParams: {
    isInLunar: string
  }
}

const Page: React.FC<OwnProps> = ({searchParams}) => {


  return (
    <main>
      <SuccessfulOrder isInLunar={searchParams.isInLunar === 'true'}/>
      <Copyright/>
    </main>
  );
};

export default Page;
