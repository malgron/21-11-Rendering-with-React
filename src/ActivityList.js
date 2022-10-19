import React from "react";
import "./ActivityList.css";

function ActivityList({ activities }) {
  if (!activities) {
    return null;
  } else {
    const rows = activities.map(({ time, description }, index) => (
      <tr key={index}>
        <td>{time}</td>
        <td>{description}</td>
      </tr>
      ));
    
    return (
      <React.Fragment>
      <table>
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
          <tbody>{rows}</tbody>
      </table>
      </React.Fragment>
    );
  }
                                
}

export default ActivityList;
