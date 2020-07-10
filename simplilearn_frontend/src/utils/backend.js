const backend = (mock) => {
  mock.onPost('/login').reply((config) => {
    let { data } = config;
    data = JSON.parse(data);
    if (data.username === 'hruday@gmail.com' && data.password === 'hruday123') {
      return [
        200,
        {
          status: 'success',
          token: 'mock_token',
        },
      ];
    }

    return [
      403,
      {
        status: 'unauthorised',
      },
    ];
  });

  mock.onGet('/users').reply((config) => {
    console.log(config);
    const { headers } = config;
    if (headers.Authorization && headers.Authorization === 'Basic mock_token') {
      return [
        200,
        {
          status: 'sucess',
          users: [{
            id: 1,
            name: 'test1',
            age: '11',
            gender: 'male',
            email: 'test1@gmail.com',
            phoneNo: '9415346313',
          },
          {
            id: 2,
            name: 'test2',
            age: '12',
            gender: 'male',
            email: 'test2@gmail.com',
            phoneNo: '9415346314',
          },
          {
            id: 3,
            name: 'test3',
            age: '13',
            gender: 'male',
            email: 'test3@gmail.com',
            phoneNo: '9415346315',
          },
          {
            id: 4,
            name: 'test4',
            age: '14',
            gender: 'male',
            email: 'test4@gmail.com',
            phoneNo: '9415346316',
          },
          {
            id: 5,
            name: 'test5',
            age: '15',
            gender: 'male',
            email: 'test5@gmail.com',
            phoneNo: '9415346317',
          },
          {
            id: 6,
            name: 'test6',
            age: '16',
            gender: 'male',
            email: 'test6@gmail.com',
            phoneNo: '9415346318',
          },
          ],
        },
      ];
    }

    return [
      401,
      { status: 'failure', error: 'unauthorised' },
    ];
  });
  return true;
};

export default backend;
