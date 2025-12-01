import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SkillDetailsCard from '../Components/SkillDetailsCard';

const CardDeatils = () => {
    const data = useLoaderData();
    const {id} = useParams()
    const [skill , setskill] = useState({})
    
   

    useEffect(()=>{
        const skillDteails = data.find(singlSkill => singlSkill.skillId == id)
        setskill(skillDteails)
    },[id , data])
    
    return (
        <div className='container mx-auto'>
            <SkillDetailsCard skill={skill}></SkillDetailsCard>
        </div>
    );
};

export default CardDeatils;