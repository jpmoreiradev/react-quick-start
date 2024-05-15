function UpperCase(props) {
  if(props.upperCase) {
    return (
    <div>
      <h1>{props.upperCase.toUpperCase()}</h1>
    </div>
    )
  }
  else {
    return (
      <div>
        <h1>{props.lowerCase.toLowerCase()}</h1>
      </div>
      )
  }
}

export default UpperCase;