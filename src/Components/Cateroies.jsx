import React from 'react';
import { useLoaderData } from 'react-router';

import Card from './Card';

const Cateroies = () => {
    const skillData = useLoaderData()
    
    return (
        <div className='mt-10 md:mt-15 lg:mt-20 container mx-auto'>
          <div className='space-y-3 text-center '>
              <h2 className='text-3xl  md:text-4xl lg:text-5xl font-bold  '>Popular Skills</h2>
              <p className=' md:text-lg lg:text-xl font-semibold text-gray-500'>Discover the most sought-after skills in your community</p>
          </div>
          <div className='grid md:p-5 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-15'>
            {
                skillData.map(data => <Card
                key={data.skillId}
                data = {data}>

                </Card>)
            }
          </div>
        </div>
    );
};

export default Cateroies;