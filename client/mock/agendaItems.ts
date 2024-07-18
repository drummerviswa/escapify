import isEmpty from "lodash/isEmpty";

function createAgendaItems(events) {
  return events.map((event) => ({
    title: event.date,
    data: event.times.map((time) => ({
      hour: time.hour,
      duration: time.duration,
      title: time.title,
      presence:time.presence,
      description:time.description
    })),
  }));
}
export function getMarkedDates(agendaItems) {
  const marked = {};

  agendaItems.forEach((item) => {
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = { marked: true };
    } else {
      marked[item.title] = { disabled: true };
    }
  });

  return marked;
}
const events = [
  {
    date: "2024-07-16",
    times: [
      { hour: "12am", duration: "1h", title: "First Yoga",description:"temp", presence: "Present" },
    ],
  },
  {
    date: "2024-08-01",
    times: [
      { hour: "4pm", duration: "1h", title: "Pilates ABC",description:"temp", presence: "Absent" },
      { hour: "5pm", duration: "1h", title: "Vinyasa Yoga",description:"temp", presence: "Present" },
    ],
  },
  {
    date: "2024-08-15",
    times: [
      { hour: "1pm", duration: "1h", title: "Ashtanga Yoga",description:"temp", presence: "Present" },
      { hour: "2pm", duration: "1h", title: "Deep Stretches",description:"temp", presence: "Present" },
      { hour: "3pm", duration: "1h", title: "Private Yoga",description:"temp", presence: "Absent" },
    ],
  },
];

const agendaItems = createAgendaItems(events);
const markedDates = getMarkedDates(agendaItems);

export { agendaItems, markedDates };
