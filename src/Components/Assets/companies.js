import star from "../Assets/star.png";

const companies = [
  {
    profile: "../Assets/company.png",
    name: "Jade & Co",
    specialization: "Since 2019 | Jade & Co Real Estate",
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
];

export default companies;

export const generateStar = (total) => {
  const starCount = total;
  const stars = [];

  for (let index = 0; index < starCount; index++) {
    stars.push(<img key={index} src={star} alt="..." width={20} />);
  }

  return <div className="flex space-x-2 w-32">{stars}</div>;
};
