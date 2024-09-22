import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./FAQ.css"; // Import a CSS file for styling

const faqs = [
  {
    id: 1,
    question: "What can I deliver?",
    answer:
      "You can deliver packages that: Don’t contain any prohibited items (see list of prohibited items below.) Fit comfortably in the trunk of your vehicle.    Are closed, securely sealed, and ready to be delivered.",
  },
  {
    id: 2,
    question: "What are the prohibited items?",
    answer:
      "Items sent via RushRabbit must comply with all laws and regulations and with RushRabbit policies. Sending illegal, unsafe, or other prohibited items including but not limited to those listed on this page is strictly prohibited.The following items are prohibited from package delivery:    People,Illegal items,Firearms, weapons, ammunition, and their parts Alcohol, Highly perishable food or beverages (e.g., raw meat or dairy products, etc. Uber is not responsible for food quality/safety issues that may arise as part of transport ), Pharmaceutical products, over-the-counter medications, vitamins, or supplements, Money, gift cards, lottery tickets, or transferable securities, Drugs, drug paraphernalia, or tobacco products, Dangerous or hazardous items, including:, Explosives, Stolen goods, Fragile items, Sexual aids; obscene or pornographic material, Livestock, regulated species (e.g., noxious weeds, prohibited seeds), or animal parts, bloods, or fluids",
  },
  {
    id: 3,
    question:
      "What do I do if I believe the package has a prohibited or illegal item?",
    answer:
      "If you suspect the package contains a prohibited or illegal item please do not accept the package. Report the issue in the app and select Suspicious item to cancel the trip. If you suspect that the package contains an illegal item, such as illegal drugs or firearms, and the package is already in your possession, cancel the trip and contact your local non-emergency line You may receive compensation for submitting the item to law enforcement. We will cooperate with any official requests from law enforcement.",
  },
  {
    id: 4,
    question: "What is proof of delivery?",
    answer:
      "After leaving the pickup point, check the app to see if you’re required to enter a PIN from the recipient. This proof of delivery PIN lets you confirm you’ve dropped off the package and notifies the sender that it has arrived at its destination. Once you arrive at the dropoff location, the app will prompt you to bring your phone with you so the recipient can provide you with a PIN.    Tap on the blue “Enter PIN” button at the bottom of the screen and input the 4-digit PIN from the recipient.    After a successful PIN match, the trip automatically ends, and you will see a confirmation message.",
  },
  {
    id: 5,
    question: "What if the recipient can’t provide a pin?",
    answer:
      "If the recipient can’t provide the correct pin: Tap “I need help” in the app. Tap “Can’t confirm PIN” to contact the customer who ordered the delivery. If you’re still unable to confirm the PIN, but the recipient is available to receive the delivery, tap “Deliver without PIN.” If the recipient is not available, tap “Unable to deliver,” and Uber Support will help you coordinate a package return.",
  },
  {
    id: 6,
    question: "Can I cancel a delivery request?",
    answer:
      "Yes. You may decline a request to pick up and deliver a package or cancel the delivery, as long as you don’t violate RushRabbit's Community Guidelines.",
  },
  {
    id: 7,
    question: "What if the recipient isn’t at the dropoff location?",
    answer:
      "If the recipient isn’t at the dropoff location within 5 minutes of your arrival, please don’t end the trip. Instead, contact the sender through the app to try to coordinate the dropoff. The on-trip agenda will include the recipient’s name, drop off address, and an option to call them or send them a message through the app. To contact the sender, scroll down to the delivery details then tap the 3 dots. You will see an option to call or message them directly. If the sender or recipient: Asks you to return the package to the pickup location, the fare for the return trip will be added to the overall trip fare.    Asks you to leave the package at the recipient’s door, they must do so in writing as part of the special delivery instructions or in a message within the app.Your time is valuable. You will be compensated with a cancellation fee as long as you have reached or are en-route to the pickup location before the delivery is cancelled by the rider.",
  },
];

const FAQ = () => {
  const [activeQuestionId, setActiveQuestionId] = useState(1);

  const handleClick = (id) => {
    setActiveQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="faq-container">
      <h1 className="heading-faq">FAQ's</h1>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item">
          <div className="faq-header" onClick={() => handleClick(faq.id)}>
            <h1 className="faq-question">{faq.question}</h1>
            <span
              className={activeQuestionId === faq.id ? "read active" : "read"}
            >
              {activeQuestionId === faq.id ? "Hide" : "Read"}
            </span>
          </div>
          <CSSTransition
            in={activeQuestionId === faq.id}
            timeout={300}
            classNames="answer"
            unmountOnExit
          >
            <p className="faq-answer">{faq.answer}</p>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
