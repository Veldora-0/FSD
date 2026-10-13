//  Assignment6:
    // use Axios in react to fetch data from api or server,
    // useeffect to fetch data from api or server and display the data in a table below the form
import React from 'react'


const Assignment_6 = () => {
    
    const [apiData, setApiData] = React.useState([]);   
    React.useEffect(() => {
        // Fetch data from dummyjson.com/products using axios
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setApiData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


  return (
    <div>
      
    </div>
  )
}

export default Assignment_6
