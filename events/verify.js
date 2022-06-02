const config = require('../config.json');
const freshy = new RegExp('-');

module.exports = {
    'name' : 'guildMemberUpdate',
    'once' : false,
    execute(oldMember, newMember) {
        if (oldMember.user.bot) {
            return;
        }
        if (freshy.test(newMember.displayName)) {
            newMember.roles.add(config.verify.roleId);
            return;
        }
        newMember.roles.remove(config.verify.roleId);
    },
};
