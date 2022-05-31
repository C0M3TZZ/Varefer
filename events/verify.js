const config = require('../config.json');
const p19Plus = new RegExp('^!P\'');
const freshy = new RegExp('-');

module.exports = {
    'name' : 'guildMemberUpdate',
    'once' : false,
    execute(oldMember, newMember) {
        if (oldMember.user.bot) {
            return;
        }
        if (freshy.test(newMember.nickname)) {
            newMember.roles.add(config.verify.roleId);
            return;
        }
        newMember.roles.remove(config.verify.roleId);
        if (p19Plus.test(newMember.nickname)) {
            return;
        }
    },
};
