const initStateLogin = {
  username: '',
  password: '',
  NIK: '',
  jabatan: '',
  BRANCH_CODE: '',
  CUST_CODE: '',
  KODE_RAYON: '',
  CUST_NAME: '',
  CUST_ADDRESS: '',
  // principal: '',
  GROUP_MTM: '',
  PRODUCT_CODE: '',
  PRODUCT_NAME: '',
};

const initStateUserData = {
  data: '',
};

const initStateProductData = {
  branch_code: '',
  transaction_number: '',
  // principal_code      : '',
  group_product: '',
  warehouse_code: '',
  status: '',
  ed: '',
  batch: '',
};

const initStateInputProductData = {
  transaction_number: '',
};

export const loginReducer = (state = initStateLogin, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      username: action.value.username,
      password: action.value.password,
      NIK: action.value.NIK,
    };
  }

  return state;
};

export const UserDataReducer = (state = initStateUserData, action) => {
  if (action.type === 'SET_USER_DATA') {
    // console.log('action data' , action.value)
    return {
      ...state,
      transaction_number: action.value,
    };
  }
  return state;
};

export const StockDataReducer = (state = initStateProductData, action) => {
  if (action.type === 'SET_STOCK_DATA') {
    console.log('action data', action.value);

    return {
      ...state,
      branch_code: action.value.branch,
      transaction_number: action.value.number.transaction_number,
      // principal_code      : action.value.code,
      group_product: action.value.group,
      warehouse_code: action.value.warehouse_code,
      status: action.value.status,
      ed: action.value.ed,
      batch: action.value.batch,
    };
  }
  return state;
};

export const InputDataReducer = (state = initStateInputProductData, action) => {
  if (action.type === 'INPUT_STOCK_DATA') {
    // console.log('action data' , action.value)
    return {
      ...state,
      data: action.value,
    };
  }
  return state;
};
