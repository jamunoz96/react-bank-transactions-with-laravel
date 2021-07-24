
const transactionReducer = (transactions = [], action) => {
  switch (action.type) {
    case "SET_DATA":
      return action.data;
    default:
      return transactions;
  }
};

export default transactionReducer;
