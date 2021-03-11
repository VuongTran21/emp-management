import { connect } from 'react-redux';
import App from './App';
import { getListEmployeeAction } from './store/action';

export const mapStateToProps = ({ employee }) => ({
  employees: employee.employees,
  loading: employee.loading,
});

export const mapDispatchToProps = dispatch => ({
  getListEmployee: () => dispatch(getListEmployeeAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
