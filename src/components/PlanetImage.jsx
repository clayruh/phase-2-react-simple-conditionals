export default function PlanetImage({planet}) {

    return (
    <>
        <h2>{planet.name}</h2>
        <img className={planet.is_planet ? "" : "not-planet"} src={planet.image} alt={planet.name} />
    </>
    )
}