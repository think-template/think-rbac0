const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const list = await this.model('user').select();
    return this.success(list);
  }
};
