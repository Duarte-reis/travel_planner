import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import ItineraryComplete from "../../components/itinerary_components/ItineraryComplete"
import Menu from "../../components/features_navigation/Menu"

function Itinerary() {
    return (
        <section className="itinerary_wrap">
            <div className="itinerary_wrap_container">
                <div className="itinerary_complete_wrapper">
                    <div className="menu_navigation_wrapper"> 
                        <div className="menu_wrapper">
                            <img src="/images/logo-original.png" alt="logo" id="header_logo" />
                            <Menu page="itinerary" />
                        </div>
                        <div className="navigation_plus_itinerary">
                            <BudgetNavigation 
                                pageTitle="Itinerary"
                            />
                        </div>
                    </div>
                    <div className="itinerary_complete_container">
                        <ItineraryComplete />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Itinerary