import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */

// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
    const resFilterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return resFilterData;
}

// Body Component for body section: It contain all restaurant cards
const Body = () => {
    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {
        getRestaurants();
    }, []);

    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants() {
        // handle the error using try... catch
        try {
            const FOODFIRE_API_URL = "http://localhost:5000/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";
            const response = await fetch(FOODFIRE_API_URL);
            const json = await response.json();

            // initialize checkJsonData() function to check Swiggy Restaurant data
            function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                    // initialize checkData for Swiggy Restaurant data
                    let checkData =
                        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                            ?.restaurants;

                    // if checkData is not undefined then return it
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
            }

            // call the checkJsonData() function which return Swiggy Restaurant data
            const resData = checkJsonData(json);

            // update the state variable restaurants with Swiggy API data
            setAllRestaurants(resData);
            setFilteredRestaurants(resData);
        } catch (error) {
            console.log(error);
        }
    }

    // use searchData function and set condition if data is empty show error message
    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredData);
            setErrorMessage("");
            if (filteredData?.length === 0) {
                setErrorMessage("No matches restaurant found");
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurants(restaurants);
        }
    };

    // if allRestaurants is empty don't render restaurants cards
    // allRestaurants?.length === 0 this can not be replace by  if (!allRestaurants) return null\
    // For allRestaurants = []: The condition is true, so the component returns null, and nothing is rendered. This means the Shimmer component (intended for the empty array case) will not be shown, breaking the loading UI.
    // For allRestaurants = null or undefined: The condition is false, so the component continues rendering. This could cause errors in the JSX, such as trying to call filteredRestaurants.map when filteredRestaurants is also null or undefined (since filteredRestaurants is initially [] but depends on allRestaurants).
    // For allRestaurants = [{...}, {...}]: The condition is false, and the component continues rendering, which is fine and matches the original behavior for this case.
    if (!allRestaurants) return null;

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    // update the state variable searchText when we typing in input box
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button
                    className="search-btn"
                    onClick={() => {
                        // user click on button searchData function is called
                        searchData(searchText, allRestaurants);
                    }}
                >
                    Search
                </button>
            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}

            {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
            {/* conditional rendering: rendering the ui components on the basis of a condition */}
            {allRestaurants?.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="restaurant-list">
                    {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
                    {filteredRestaurants.map((restaurant) => {
                        return (
                            <RestaurantCard
                                key={restaurant?.info?.id}
                                resData={restaurant}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Body;