export const handleInputDataFiller = (store: any, snap: any, newState: any) => {
  store.InformationData = {
    ...snap.InformationData,
    ...newState,
  };
};
