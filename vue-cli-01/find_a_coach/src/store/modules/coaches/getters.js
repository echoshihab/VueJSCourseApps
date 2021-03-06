export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      console.log('are we returning from here?');
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    console.log((currentTimeStamp - lastFetch) / 1000 > 60);
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
