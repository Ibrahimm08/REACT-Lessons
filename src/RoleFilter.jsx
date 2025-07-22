import { employees } from "./Data";
import { getImageUrl } from "./Utils";

const Role = () => {
  const engineers = employees.filter(
    (employee => employee.jobrole === "Engineer"
    ));
  const everyoneElse = employees.filter(
    (employee => employee.jobrole !== "Engineer"
    ));

  const isEngineers = engineers.map((employee) => (
    <div key={employee.id} className="employees">
      <div className="details">
        <img src={getImageUrl(employee)} alt="" />
        <p>
          <b>Job Role</b> {employee.jobrole}
        </p>
        <p>
          <b>Start Date</b> {employee.startdate}
        </p>
      </div>
    </div>
  ));

  const isEveryoneElse = everyoneElse.map((employee) => (
    <div key={employee.id} className="employees">
      <div className="details">
        <img src={getImageUrl(employee)} alt="" />
        <p>
          <b>Job Role</b> {employee.jobrole}
        </p>
        <p>
          <b>Start Date</b> {employee.startdate}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <h1>Engineers</h1>
      {isEngineers}
      <h1>Everyone Else</h1>
      {isEveryoneElse}
    </>
  );
};

export default Role;
