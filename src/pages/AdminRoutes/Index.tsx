/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPanelLayout from "../../components/AdminPanelLayout";
import CaseStudy from "../AdminPanelPages/CaseStudy";
import AddJobs from "../AdminPanelPages/Careers/AddJobs";
import ApplicationsSubmitted from "../AdminPanelPages/Careers/Applicationssubmitted";
import ContactSubmission from "../AdminPanelPages/ContactSubmission";
function Index() {
  return (
    <Routes>
      <Route
        path='/Contact-Submission'
        element={
          <AdminPanelLayout>
            <ContactSubmission />
          </AdminPanelLayout>
        }
      />
      <Route
        path='/Case-Study'
        element={
          <AdminPanelLayout>
            <CaseStudy />
          </AdminPanelLayout>
        }
      />
      <Route
        path='/Careers/Add-Jobs'
        element={
          <AdminPanelLayout>
            <AddJobs />
          </AdminPanelLayout>
        }
      />
      <Route
        path='/Careers/Applications-Submitted'
        element={
          <AdminPanelLayout>
            <ApplicationsSubmitted />
          </AdminPanelLayout>
        }
      />
    </Routes>
  );
}

export default Index;
