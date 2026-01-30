import BudgetNavigation from "../../components/features_navigation/BudgetNavigation"
import FormComplete from "../../components/form/FormComplete"
import Menu from "../../components/features_navigation/Menu"

function BudgetForm() {
    return (
        <section className="budget_form_wrap">
            <div className="budget_form_content">
                <div className="form_complete_wrapper">
                    <div className="menu_navigation_wrapper"> 
                        <div className="menu_wrapper">
                            <img src="/images/logo-original.png" alt="logo" id="header_logo" />
                            <Menu page="budgetform" />
                        </div>
                        <div className="navigation_plus_form">
                            <BudgetNavigation 
                                pageTitle="Budget Form"
                            />
                        </div>
                    </div>
                    <div className="form_complete_container">
                        <FormComplete />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BudgetForm