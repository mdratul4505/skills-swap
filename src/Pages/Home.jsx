import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import HeroSection from "../Components/HeroSection";
import Cateroies from "../Components/Cateroies";
import Toprated from "../Components/Toprated";
import Work from "../Components/Work";
import SkillCategories from "../Components/SkillCategories";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />

      <Cateroies />

      <Toprated></Toprated>

      <Work></Work>

      <SkillCategories></SkillCategories>
    </div>
  );
};

export default Home;
