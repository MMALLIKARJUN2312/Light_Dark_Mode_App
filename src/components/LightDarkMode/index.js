// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changingMode = () => {
    this.setState(previousState => ({isDarkMode: !previousState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'light-mode' : 'dark-mode'
    const headingText = isDarkMode
      ? 'Click To Change Mode'
      : 'Click To Change Mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className="heading">{headingText}</h1>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.changingMode}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
