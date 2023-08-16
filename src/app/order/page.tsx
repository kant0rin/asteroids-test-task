import React from 'react';
import SuccessfulOrder from "@/components/sections/order/SuccessfulOrder/SuccessfulOrder";

interface OwnProps {
  searchParams: {
    isInLunar: string
  }
}

const Page: React.FC<OwnProps> = ({searchParams}) => {


  return (
    <main>
      <SuccessfulOrder isInLunar={searchParams.isInLunar === 'true'}/>
    </main>
  );
};

export default Page;
