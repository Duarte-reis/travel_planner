import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import DetailsComplete from "../../components/details/DetailsComplete"
import Menu from "../../components/features_navigation/Menu"

function Details() {
    return (
        <section className="details_wrap">
            <div className="details_container">
                <div className="details_complete_wrapper">
                    <div className="menu_navigation_wrapper"> 
                        <div className="menu_wrapper">
                            <img src="/images/logo-original.png" alt="logo" id="header_logo" />
                            <Menu page="details" />
                        </div>
                        <div className="navigation_plus_details">
                            <BudgetNavigation 
                                pageTitle="Details"
                            />
                        </div>
                    </div>
                    <div className="details_complete_container">
                        <DetailsComplete />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details