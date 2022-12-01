module.exports = {
  async up(db, client) {
    return db.collection('users').updateMany(
      { email: 'cv@demo.fr' },
      {
        $set: {
          role: {
            name: 'admin',
            permissions: [
              'CAN_ACCESS_SETTINGS',
              'CAN_EDIT_TASK',
              'CAN_SEE_PARTNER_TASKS',
              'CAN_CLEAR_APP_HISTORY',
              'CAN_CLEAR_USER_HISTORY',
              'CAN_CLEAR_TODAY_HISTORY',
            ],
          },
        },
      },
    );
  },

  async down(db, client) {
    return db.collection('users').updateMany(
      { email: 'cv@demo.fr' },
      {
        $set: {
          role: {
            name: 'user',
            permissions: [
              'CAN_ACCESS_SETTINGS',
              'CAN_EDIT_TASK',
              'CAN_SEE_PARTNER_TASKS',
              'CAN_CLEAR_USER_HISTORY',
              'CAN_CLEAR_TODAY_HISTORY',
            ],
          },
        },
      },
    );
  },
};
