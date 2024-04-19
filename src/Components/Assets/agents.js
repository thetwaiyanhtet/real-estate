import star from "../Assets/star.png";

const agents = [
  {
    profile: "../Assets/agent-profile-1.png",
    name: "Bryan Jane",
    specialization: "Property Consultant",
    nationality: "Singaporean",
    language: "English, Chinese",
    workFor: "Professional Agent | Jade & Co Real Estate",
    rating: 5,
    recommendation: "20+",
    exp: "Since 2018 ( 5 + Years )",
    postedListing: 390,
    social: "LinkedIn Profile",
    briefInfo:
      "Bryan is hardworking, friendly and prides himself in giving the highest level of customer service. With a passion and complete knowledge of Emaar Beachfront, Bryan is a true expert and is ready to assist you with all your buying, selling, and renting needs. When Bryan isn’t making homeownership dreams come true for her clients, she enjoys spending time with her baby Mia and her family. Bryan is a true expert and is ready to assist you with all your buying, selling, and renting needs. ",
  },
  {
    profile: "../Assets/agent-profile-2.png",
    name: "Jacob Lee",
    workFor: "Fausto Commercial Realty Consultants Inc",
    rating: 4.5,
    recommendation: "30+",
    exp: "3+ Years",
    postedListing: 310,
  },
  {
    profile: "../Assets/agent-profile-3.png",
    name: "Li Fang Oo",
    workFor: "Fausto Commercial Realty Consultants Inc",
    rating: 4.0,
    recommendation: "35+",
    exp: "2+ Years",
    postedListing: 190,
  },

  {
    profile: "../Assets/agent-profile-4.png",
    name: "Xian Xui",
    workFor: "Fausto Commercial Realty Consultants Inc",
    rating: 5.0,
    recommendation: "50+",
    exp: "6+ Years",
    postedListing: 410,
  },
  {
    profile: "../Assets/agent-profile-5.png",
    name: "Vijay Bee",
    workFor: "Fausto Commercial Realty Consultants Inc",
    rating: 5.0,
    recommendation: "60+",
    exp: "6+ Years",
    postedListing: 590,
  },
];

export default agents;

export const generateStar = (total) => {
  const starCount = total;
  const stars = [];

  for (let index = 0; index < starCount; index++) {
    stars.push(<img key={index} src={star} alt="..." width={20} />);
  }

  return <div className="flex space-x-2 w-32">{stars}</div>;
};
