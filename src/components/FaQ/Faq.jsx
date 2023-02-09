import React from "react";
import Heading from "../../layouts/Heading/Heading";
import FaqItem from "./FaqItem";

const FaqData = [
  {
    id: 1504221460,
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 522558645,
    question: "Question 2",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit!",
  },
  {
    id: 566073352,
    question: "Question 3",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4288427256,
    question: "Question 4",
    answer:
      " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
  {
    id: 1997616630,
    question: "Question 5",
    answer:
      " Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
  },
];

const FaQ = () => {
  return (
    <div className="container py-5">
      <Heading />

      <div className="row">
        <div className="col-7">
          <ul className="list-unstyled">
            {FaqData.map((eachFaq) => (
              <FaqItem key={eachFaq.id} faqData={eachFaq} />
            ))}
          </ul>
        </div>
        <div className="col-4 offset-1 justify-content-end">
          <img
            src="http://clipart-library.com/images_k/question-marks-transparent-background/question-marks-transparent-background-23.png"
            alt="bild"
            className="w-100 img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default FaQ;
