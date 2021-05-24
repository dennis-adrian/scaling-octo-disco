module.exports = {
  Query: {
    sessions: (parent, args, context, info) => {
      return context.dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
  },
};
