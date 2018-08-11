/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
// Composant
import Light from 'src/components/Light';

// Action creators
import { changeName, toggleLight } from 'src/store/reducer';

/**
 * Code
 */
// Données du state
// 2 paramètres (state, ownProps) sont dispo
// Si je ne veux pas renvoyer de props
// `const mapStateToProps = null;`
const mapStateToProps = (state, ownProps) => ({
  name: state.name,
  status: state.light,
});

// Actions
// 2 paramètres (dispatch, ownProps) sont dispo
// Si je ne veux pas renvoyer de props
// const mapDispatchToProps = {};
const mapDispatchToProps = (dispatch, ownProps) => ({
  changeName: (name) => {
    console.log(`Je dispatch l\'action : changeName('${name}')`);
    dispatch(changeName(name));
  },
  toggleLight: () => {
    console.log('Je dispatch l\'action : toggleLight()');
    dispatch(toggleLight());
  },
});

/**
 * Container
 */
const LightContainer = connect(mapStateToProps, mapDispatchToProps)(Light);


/**
 * Export
 */
export default LightContainer;
