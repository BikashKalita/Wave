import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Alakananda",
      cover:
        "https://baahi.s3.ap-south-1.amazonaws.com/images/images500/48628306_Alakananda.jpg",
      artist: "Tonmoy Krypton, Shankuraj Konwar",
      audio: "https://baahi.xomoy.xyz/songs/songs84/55528248_INS4J2000376..mp3",
      color: ["F1F7F5", "263226"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Barixare Batori",
      cover:
        "https://baahi.s3.ap-south-1.amazonaws.com/images/images500/47816094_Barixare-Batori.jpg",
      artist: "Anju Panchi",
      audio: "https://baahi.xomoy.xyz/songs/songs84/30059965_INE302100442.mp3",
      color: ["111D2D", "361726"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Moupiya",
      cover:
        "https://baahi.s3.ap-south-1.amazonaws.com/images/images500/70388361_Moupiya.jpg",
      artist: "Shankuraj Konwar, Maitrayee Patar",
      audio: "https://baahi.xomoy.xyz/songs/songs84/1785571_INE302100168.mp3",
      color: ["33A2CD", "EDF4EC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Smriti",
      cover:
        "https://baahi.s3.ap-south-1.amazonaws.com/images/images500/31141371_SMRITI-_COVER-ART_.jpg",
      artist: "Sannidhya Bhuyan",
      audio:
        "https://baahi.xomoy.xyz/songs/songs84/23240354_MASTER-final-SMRITI.mp3",
      color: ["0B0F12", "3B9685"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nilanjana",
      cover:
        "https://baahi.s3.ap-south-1.amazonaws.com/images/images500/61574_Nilanjana%C2%A0.jpg",
      artist: "Shankuraj Konwar",
      audio: "https://baahi.xomoy.xyz/songs/songs84/36657_INE302000088.mp3",
      color: ["880000", "00073D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keteki",
      cover:
        "https://baahi.s3.ap-south-1.amazonaws.com/images/images500/88730394_keteki.jpg",
      artist: "Sannidhya Bhuyan",
      audio: "https://baahi.xomoy.xyz/songs/songs84/66779305_Keteki.mp3",
      color: ["880000", "00073D"],
      id: uuidv4(),
      active: false,
    },
  ];
}
export default chillHop;
