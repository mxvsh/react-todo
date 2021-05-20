import {
  MdBook,
  MdContentPaste,
  MdHome,
  MdLocalAirport,
  MdMailOutline,
  MdMusicNote,
} from "react-icons/md";

const Lists = {
  all: {
    title: "All",
    color: "brand.500",
    tasks: 23,
    icon: <MdContentPaste />,
  },
  work: {
    title: "Work",
    color: "yellow.400",
    tasks: 12,
    icon: <MdMailOutline />,
  },

  music: {
    title: "Music",
    color: "red.400",
    tasks: 8,
    icon: <MdMusicNote />,
  },
  travel: {
    title: "Travel",
    color: "green.400",
    tasks: 8,
    icon: <MdLocalAirport />,
  },
  study: {
    title: "Study",
    color: "purple.400",
    tasks: 8,
    icon: <MdBook />,
  },
  home: {
    title: "Home",
    color: "orange.400",
    tasks: 6,
    icon: <MdHome />,
  },
};

export default Lists;
