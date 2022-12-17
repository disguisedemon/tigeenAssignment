export const NAVIGATION_LINKS = [
  {
    id: 0,
    lable: "Nominations",
    route: "/nominations",
    subNavLinks: [
      {
        id: 0,
        label: "Nomination Entry",
        route: "nominations/nomination-entry",
      },
    ],
  },
  {
    id: 1,
    lable: "Ticketing",
    route: "/ticketing",
    subNavLinks: [
      {
        id: 0,
        label: "Physical Ticket",
        route: "ticketing/physicalTicket",
      },
    ],
  },
];
