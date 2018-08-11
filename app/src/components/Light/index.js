/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */
class Light extends React.Component {
  // Validation des props
  static propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    changeName: PropTypes.func.isRequired,
    toggleLight: PropTypes.func.isRequired,
  };

  /**
   * Handlers
   */
  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.changeName(value);
  }

  /**
   * Rendu
   */
  render() {
    const { name, status, toggleLight } = this.props;
    return (
      <div id="light">
        <div><span>{name || '...'}</span> est <span>{status ? 'allumée' : 'éteinte'}</span>
        </div>
        <button
          onClick={toggleLight}
        >
          {status ? 'Eteindre' : 'Allumer'}
        </button>

        <div>
          <input
            placeholder="Nom de la lumière"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}


/**
 * Export
 */
export default Light;
