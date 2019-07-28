const getToken = async () => {
    try {
      const res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      });
      const body = await res.json();
      // const token = body.access_token;
      const token = body.access_token;
      // dispatchToken({type: 'SET_TOKEN', token});
      return token;
    } catch (e) {
      console.log('Error retrieving token');
    }
  }

  export default getToken;