import ambulance from "./assets/Image/ambulance.jpg";
import firestation from "./assets/Image/firestation.jpg";
import police from "./assets/Image/police.jpg";
import traffic from "./assets/Image/traffic.jpg";

const importantContact = [
  {
    id: 1,
    name: "Ambulances",
    phone: "102",
    des: "An ambulance is a medically-equipped vehicle used to transport patients to treatment facilities, such as hospitals, in emergency situations.",
    imagePath: ambulance,
  },
  {
    id: 2,
    name: "Traffic Police",
    phone: "103",
    des: "Traffic police, also known as traffic officers or traffic policemen, are law enforcement officers responsible for maintaining traffic safety and order on roads and highways.",
    imagePath: traffic,
  },
  {
    id: 3,
    name: "Firestation",
    phone: "101",
    des: " A structure or area for storing firefighting apparatuses, personal protective equipment, fire hoses, and other specialized equipment.",
    imagePath: firestation,
  },
  {
    id: 4,
    name: "Police",
    phone: "100",
    des: " Police are a body of officers representing the civil authority of government, responsible for maintaining public order and safety.",
    imagePath: police,
  },
];

export default importantContact;
