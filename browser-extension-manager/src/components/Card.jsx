import Button from "./Button"

const Card = ({logo, name, description, isActive}) => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
      </div>
      <div>
        <Button label={'Remove'} />

      </div>
    </div>
  )
}

export default Card
