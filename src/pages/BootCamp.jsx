import React from "react";

import imagebanner from "../assets/bootcamp.png";
import "../pages/Bootcamp.css";

function BootCamp() {
  const data = [
    {
      id: 1,
      one: "Introduction to Blockchain",
      two: "1 hour",
      paragraph: [
        "What is Blockchain?",
        "History and Evolution of Blockchain.",
        "Key Features and Benifits.",
      ],
    },
    {
      id: 2,
      one: "How Blockchain Works.",
      two: "1.5 hour",
      paragraph: [
        "What is Blockchain?",
        "Structure of Blockchain.",
        "Cryptography in Blockchain.",
        "Consensus Mechanism.",
        "Transaction Verification and Validation.",
      ],
    },
    {
      id: 3,
      one: "Blockchain Use Cases",
      two: "1.5 hour",
      paragraph: [
        "Cryptocurrencies(Bitcoin, Ethereum)",
        "Supply Chain Management.",
        "Healthcare and Identity Verification.",
        "Smart Contracts and Decentralized Applications.",
      ],
    },
    {
      id: 4,
      one: "Blockchain Ecosystem.",
      two: "1 hour",
      paragraph: [
        "Public vs Private Blockchain.",
        "Ethereum and Smart Contracts.",
        "Other Major Blockchain Platforms",
        "Walleta and Exchanges.",
      ],
    },
    {
      id: 5,
      one: "Challenges and Future Trends.",
      two: "0.5 hour",
      paragraph: [
        "Scalability and Energy Consumption.",
        "Regulatory and Legal Considerations.",
        "Emerging Trends Legal Considerations.",
        "The Future of Blockchain.",
      ],
    },
    {
      id: 6,
      one: "Conclusion and Q&A.",
      two: "0.5 hour",
      paragraph: [
        "Recap of Key Concepts.",
        "Regulatory and Legal Considerations.",
        "Open Discussion and Participant Questions.",
        "Final Certification Delivery.",
      ],
    },
  ];

  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-3 ">
        {" "}
       
        <div className="bg-[#F7F4FD] rounded-xl rounded-br-[80px]  md:p-20 px-4 py-9 ">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
            <div className="md:w-3/5">
              {/*  <div className="slider-thumb "></div> */}

              <h2 className="sm:text-4xl md:text-[42px]  font-headingFont text-3xl text-black font-bold mb-5 ">
                BOOTCAMP
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* *************************************************** */}
      <div className="container mx-auto">
        <div className="mx-10">
        <h2 className="md:text-2xl font-headingFont text-lg font-bold py-2">
          About The Program
        </h2>
        <p className="py-2 text-lg leading-10 text-medium">
          Blockchain Developer Bootcamp aims to provide an experience in
          Blockchain development to blockchain beginners. The sessions will give
          a walkthrough of popular tools necessary for dApp development and a
          step-by-step guide to implementing decentralized application.
        </p>
      </div></div>
      <div className="container mx-auto">
      <div className="mx-10 flex md:flex-row flex-col ">
       
        <div className="md:w-1/2">
          <h2 className="md:text-2xl text-lg font-headingFont font-bold py-2">
            What You Will Learn?
          </h2>
          <ul className="py-2 text-lg leading-10 text-medium ">
            <li>* Blockchain Fundamentals. </li>
            <li>* Cryptocurrency Expert.</li>
            <li>* Navigating Cryptocurrencies.</li>
            <li> * Blockchain for global Impact</li>
            <li>* Bitcoin Cryptocurrency.</li>
            <li>* Cryptocurrency Beginner Guide.</li>
          </ul>
          <h2 className="md:text-2xl text-lg font-headingFont font-bold py-2">
            What You Will Earn?
          </h2>
          <ul className="py-2 text-lg leading-10 text-medium ">
            <li>* A Blockchain-powered Certificate. </li>
            <li>
              * After Completing the Program{" "}
              <li>* Well knowledge about Blockchain. </li>
              <li>* Real world Contribution of Blockchain.</li>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2  p-2">
          <img className="rounded-2xl " src={imagebanner} alt="" />
        </div>
      </div>
      </div>
      {/* ********************************** **********************************************************/}
      <div className="container mx-auto">
        <div className="mx-10">
        <h2 className="md:text-2xl text-lg font-headingFont font-bold py-2">Program Details</h2>
        <table className="min-w-full divide-y m-4 divide-gray-200 border-2 border-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th className="text-lg text-left pl-10 p-2 font-headingFont font-medium text-gray-800 uppercase tracking-wider">
        Sessions
      </th>
      <th className="font-medium text-center font-headingFont text-gray-800 uppercase tracking-wider">
        Duration
      </th>
      <th className="text-lg text-left font-headingFont pl-16 font-medium text-gray-800 uppercase tracking-wider">
        Covered Topics
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y text-lg divide-gray-200">
    {data.map((e, index) => (
      <React.Fragment key={index}>
        <tr className="p-5">
          <td className="p-5">{e.one}</td>
          <td className="p-5">{e.two}</td>
          <td className="p-5">
            {e.paragraph.map((e1, subIndex) => (
              <div key={subIndex} className="pl-5">
                ⋆ {e1}
              </div>
            ))}
          </td>
        </tr>
      </React.Fragment>
    ))}
  </tbody>
</table>

        {/* <table className="min-w-full divide-y m-4  divide-gray-200 border-2 border-gray-200">
          <thead className="bg-gray-50  ">
            <th className=" text-lg text-left pl-10 p-2  font-medium text-gray-800 uppercase tracking-wider">
              Sessions
            </th>
            <th className=" font-medium text-center text-gray-800 uppercase tracking-wider">
              Duration
            </th>
            <th className=" text-lg text-left pl-20 font-medium text-gray-800 uppercase tracking-wider">
              Covered Topics
            </th>
          </thead>
          <tbody className="bg-white divide-y text-lg   divide-gray-200">
            {data.map((e) => {
              return (
                <>
                  {" "}
                  <tr className="p-5">
                    <td className="p-5">{e.one}</td>
                    <td className="p-5">{e.two}</td>
                    {e.paragraph.map((e1) => {
                      return (
                        <>
                          <tr className="px-20 p-5">
                            <td className="px-20 leading-20 p-2 ">⋆ {e1}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table> */}
      </div></div>
    </>
  );
}

export default BootCamp;
