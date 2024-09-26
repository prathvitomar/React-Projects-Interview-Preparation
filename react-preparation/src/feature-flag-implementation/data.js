const dummyApiResponse = {
    tictactoe : false,
    qrGenerator : true,
    themeChanger : true,
    accordingChallenge : false,
    scrollIndicator : true,
  };

  function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
      else reject("Some error occured! Please try again");
    });
  }
  
  export default featureFlagsDataServiceCall;