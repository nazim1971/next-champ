import { Metadata } from "next";


export const metadata: Metadata = {
    title: "About us",
    description: "This is about us page",
  };
  

const AboutPage = () => {
    return (
        <div>
            Hello from about page
        </div>
    );
};

export default AboutPage;