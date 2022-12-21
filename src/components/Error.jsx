import unknown from "../weather-icons/unknown.svg";

const errorDiv = () => {
  return (
    <div className="error">
      <img src={unknown} alt="error" className="no-weather" />
      <label className="weather-label">
        No Data
      </label>
    </div>
  )
}

export default errorDiv;