// Declaring this interface provides type safety for message keys
type Messages = typeof import("./messages/en.json");
// eslint-disable-next-line
declare interface IntlMessages extends Messages {}
