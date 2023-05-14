import PropTypes from 'prop-types';

const PageHeader = ({ headerText }) => {
  return <h2>{headerText}</h2>;
};

// Definiera egenskapers typer och om de är obligatoriska...
PageHeader.propTypes = {
  headerText: PropTypes.string,
};

// Standard värden på egenskaper
PageHeader.defaultProps = {
  headerText: 'Rubrik för sidan',
};

export default PageHeader;
