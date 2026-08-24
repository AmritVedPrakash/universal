import React from "react";
import ServicesSection from "../components/ServicesSection";
import SecurityServices from "../components/services/SecurityServices";
import MannedGuarding from "../components/services/MannedGuarding";
import CanneSquads from "../components/services/CanneSquads";
import FacilityManagementServices from "../components/services/FacilityManagementServices";
import ScopeOfService from "../components/services/ScopeOfService";

export default function Services() {
  return (
    <div>
      <SecurityServices />
      <MannedGuarding />

      <CanneSquads />

      <FacilityManagementServices />

      <ScopeOfService />
      {/* <ServicesSection/> */}
    </div>
  );
}
