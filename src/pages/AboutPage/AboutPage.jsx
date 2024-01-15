import Banner from '../../components/AboutPage/banner'
import Collapse from '../../components/AboutPage/collapse'
import "../../styles/collapse_aboutPage.sass"
import "../../styles/Font.sass"
const descriptionCollapse ={
    fiabilité:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    sécurité:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos service. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
}

function AboutPage () {
    return (
        <div>
            <Banner />
            <div>
                <Collapse collapseType="Fiabilité" collapseValue={descriptionCollapse.fiabilité}/>
                <Collapse collapseType="Respect" collapseValue={descriptionCollapse.respect}/>
                <Collapse collapseType="Service" collapseValue={descriptionCollapse.service}/>
                <Collapse collapseType="Sécurité" collapseValue={descriptionCollapse.sécurité}/>
            </div>
        </div>
    )
}



export default AboutPage