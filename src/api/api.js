import axios from 'axios';

const randomiserUrl = 'https://randomuser.me/api/?results=25';

axios.post(randomiserUrl,)
  // Handle a successful response from the server
  .then(response => {
          // Getting a data object from response that contains the necessary data from the server
          const data = response.data;
          console.log('data', data);
  })
  // Catch and print errors if any
  .catch(error => console.error('On create student error', error));

// export default {
//   search: function() {
//     return axios.get(randomiserUrl)
//   }
// };


// $.ajax({
//     url: ,
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
        