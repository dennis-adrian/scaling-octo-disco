const _ = require('lodash');

const { DataSource } = require('apollo-datasource');

const sessions = require('../data/sessions.json');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  //method for getting data out of the data source
  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const session = sessions.filter((session) => session.id == id);
    return session[0];
  }
}

module.exports = SessionAPI;
