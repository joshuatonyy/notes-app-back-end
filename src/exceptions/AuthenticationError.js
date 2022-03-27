const ClientError = require('./ClientError');

class AuthenticationsService extends ClientError {
  constructor(message) {
    super(message, 401);
    this.name = 'AuthenticationError';
  }
}

module.exports = AuthenticationsService;
