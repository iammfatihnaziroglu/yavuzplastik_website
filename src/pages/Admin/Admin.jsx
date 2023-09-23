import { logEvent } from "firebase/analytics";
import React, { useEffect, useState } from "react";
 
 
/* 
const abc = google.analyticsreporting({ version: "v4" }); */

const api =
  "https://analyticsdata.googleapis.com/v1beta/{property=properties/391348138}:runReport";
const Admin = () => {
  /* useEffect(() => {
    // Fetch basic report example
    const fetchBasicReport = async () => {
      try {
        const response = await abc.reports.batchGet({
          requestBody: {
            reportRequests: [
              {
                viewId: "391348138",
                dateRanges: [
                  {
                    startDate: "2023-07-15",
                    endDate: "2023-07-15",
                  },
                ],
                metrics: [
                  {
                    expression: "ga:users",
                  },
                  {
                    expression: "ga:sessions",
                  },
                ],
              },
            ],
          },
        });

        console.log("Basic Report:", response.data);
        // Process the response as needed
      } catch (error) {
        console.log("Error fetching Basic Report:", error);
      }
    };

    fetchBasicReport();
  }, []); */
  /*   console.log(analytics);
  const [eventCount, setEventCount] = useState(0);
  useEffect(() => {
    axios
      .post(api, {
        metrics: [{ name: "activeUsers" }],
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); */

  return <div>{"eventCount"}</div>;
};

export default Admin;
