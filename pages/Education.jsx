import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3>Manchester Metropolitan University</h3>
          <div className="subheading mb-3">MSc Computer Science</div>
          <div>
            Java, Algorithms, Cloud Computing, IoT, Web Development, Machine
            Learning and Data Analysis
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">Graduated February 2022</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
