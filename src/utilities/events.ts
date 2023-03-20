import { EventType } from "__mockData";

type EventsType = EventType[];

export const openEvents = (events: EventsType) =>
  events.filter(
    (event) => event.player2 === undefined && event.players2 === undefined
  );

export const upcomingEvents = (events: EventsType) =>
  events.filter((event) => !event.whoWon && (event.player2 || event.players2));

export const pastEvents = (events: EventsType) =>
  events.filter((event) => event.whoWon);

export const isAllEvents = (events: EventsType, filteredEvents: EventsType) =>
  JSON.stringify(filteredEvents) === JSON.stringify(events);

export const matchEvents = (events: EventsType) =>
  events.filter(
    (ev: EventType) => ev.type === "singles" || ev.type === "doubles"
  );
