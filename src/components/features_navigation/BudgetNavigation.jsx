import "../../index.css"
import NavigationBtns from "../features_navigation/NavigationBtns"
import ActionBtns from "./ActionBtns"
import FormHeader from "../form_header/FormHeader"
import Navigation from "../features_header/Navigation"
import Selector from "../Selector"

function BudgetNavigation({
    pageTitle
}) {

    const tripType = [
        {value: "Inbound", label: "Inbound"},
        {value: "Outbound", label: "Outbound"},
    ]

    return (
        <section id="budget_navigation">
            <div className="navigation_form_wrapper">
                <Navigation 
                    pageTitle = {pageTitle}
                />
                <Selector 
                    options={tripType} 
                    defaultValue="Inbound"
                    className="trip_type_selector"
                />
                <div className="navigation_wrapper">
                    <NavigationBtns />
                    <ActionBtns />
                </div>
                <FormHeader />
            </div>      
        </section>
    )
}

export default BudgetNavigation