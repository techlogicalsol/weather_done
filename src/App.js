import './App.css';
import CitySelector from './Components/CitySelector';
import WeatherList from './Components/WeatherList';
import UseFetch from './hooks/UseFetch';


function App() {

  const API_KEY = '598f7275273fdc2ce7ecc1cdc5445d3a'
  const API_BASE_URL = 'http://api.openweathermap.org/'

  const {data, error, isLoading, setUrl} = UseFetch();
  console.log(data)


return(
  <>


    <CitySelector 
        onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
      

    {data &&  <WeatherList 
                weathers={data.list}/>}

  </>
)


}


export default App;
