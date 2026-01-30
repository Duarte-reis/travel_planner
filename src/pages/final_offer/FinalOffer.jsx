import Menu from "../../components/features_navigation/Menu"
import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import FinalOfferComplete from "../../components/final_offer_components/FinalOfferComplete"

function FinalOffer() {
    return (
        <section className="final_offer_wrap">
            <div className="final_offer_wrap_container">
                <div className="final_offer_container">
                    <div className="menu_navigation_wrapper"> 
                        <div className="menu_wrapper">
                            <img src="/images/logo-original.png" alt="logo" id="header_logo" />
                            <Menu page="finaloffer" />
                        </div>
                        <div className="navigation_plus_final_offer">
                            <BudgetNavigation 
                                pageTitle="Final Offer"
                            />
                        </div>
                    </div>
                    <div className="final_offer_complete_container">
                        <FinalOfferComplete />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinalOffer