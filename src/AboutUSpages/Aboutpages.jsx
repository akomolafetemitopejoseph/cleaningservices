import React from "react";
import AboutUS from "../pages/AboutUS";
import OurStaffs from "./OurStaffs";
import Testimonial from "./Testimonial";
import SocialLinks from "../Component/SocialLinks";
import NavBar from "../Component/NavBar";

const Aboutpages = () => {
  return (
    <div>
      <NavBar />
      <AboutUS />
      <div>
        <h1 className="text-[2rem] font-extrabold uppercase text-center mt-3 ">
          our staffs
        </h1>
        <div className="flex gap-10 m-15">
          <OurStaffs
            images="https://media.istockphoto.com/id/840991134/photo/brazilian-businesswoman-in-creative-office.jpg?s=612x612&w=0&k=20&c=VDMr_at-UFze20YrO9VZTW9YSbR5APgAkHznCOLVIF4="
            text="Mark Johnson"
            paragraph="Aenean hendrerit diam quis metus vive rra, at pulvin ar enim porta"
          />
          <OurStaffs
            images="https://media.istockphoto.com/id/1353041694/photo/smiling-african-american-man-looking-at-camera-on-the-street-young-confident-student-standing.jpg?s=612x612&w=0&k=20&c=4YeQbj_KZsVZ1IUU_IZuPIt0FZJ85L9A0CNDdiECyYc="
            text="Chandra Vancova"
            paragraph="Aenean hendrerit diam quis metus vive rra, at pulvin ar enim porta"
          />
          <OurStaffs
            images="https://media.istockphoto.com/id/1136823616/photo/indoor-portrait-of-happy-african-american-young-woman-dressed-in-casual-beige-shirt-smiles.jpg?s=612x612&w=0&k=20&c=T40d6dAWqyPYQxI2mHbbNxiOEhytueKBv1QhRiBCnRk="
            text="John Franklin"
            paragraph="Aenean hendrerit diam quis metus vive rra, at pulvin ar enim porta"
          />
          <OurStaffs
            images="https://media.istockphoto.com/id/1338423651/photo/portrait-of-a-young-man-outdoors.jpg?s=612x612&w=0&k=20&c=DqCnV6F8HFSNHEuZ_Vo5OIV7qh4OtARf29Y6Lv0HcuM="
            text="Bradley Grosh"
            paragraph="Aenean hendrerit diam quis metus vive rra, at pulvin ar enim porta"
          />
          <OurStaffs
            images="https://media.istockphoto.com/id/1176657237/photo/studio-portrait-of-an-attractive-30-year-old-woman-in-a-blue-shirt-on-a-beige-background.jpg?s=1024x1024&w=is&k=20&c=yN3yRst5FqwWfLgMP7xQU3maTI8wuJRZYoUtnVE-WZQ="
            text="Amaka Benson"
            paragraph="Aenean hendrerit diam quis metus vive rra, at pulvin ar enim porta"
          />
        </div>
      </div>
      <Testimonial />
      <SocialLinks />
    </div>
  );
};

export default Aboutpages;
