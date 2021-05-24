const { gql } = require('apollo-server');

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
  }
  type Session {
    id: ID
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(reason: "This is the reason why the field will be remove")
    level: String
  }
`;
