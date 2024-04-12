export const addEventListener = (
  element: HTMLElement | Document,
  events: string | string[],
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) => {
  const eventsArray = Array.isArray(events) ? events : [events];

  eventsArray.forEach((event) => {
    element.addEventListener(event, listener, options);
  });
};

export const removeEventListener = (
  element: HTMLElement | Document,
  events: string | string[],
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
) => {
  const eventsArray = Array.isArray(events) ? events : [events];

  eventsArray.forEach((event) => {
    element.removeEventListener(event, listener, options);
  });
};
