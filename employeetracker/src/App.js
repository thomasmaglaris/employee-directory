import React from "react";
import EmployeeTable from "./components/employeeTable/employeeTable";
import EmployeesJson from "./employees.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.originalList = EmployeesJson;
    this.state = {
      employees: EmployeesJson,
    };
  }

  sortByName = () => {
    let emp = this.state.employees;
    emp.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    this.setState({
      employees: emp,
    });
  };

  searchByName = (query) => {
    let temp = this.originalList;
    if (query) {
      let filterList = temp.filter((emp) =>
        emp.name.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({
        employees: filterList,
      });
    } else {
      this.setState({
        employees: this.originalList,
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="header">Employee Table</h1>
        <EmployeeTable
          sortByName={this.sortByName}
          searchByName={this.searchByName}
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default App;
