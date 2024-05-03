import React from "react";
import logo2 from "../assets/logo2.png";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const facilityDescriptions = {
  diagnostics: {
    title: "Diagnostics",
    content: (
      <>
        <p>
          There are two main types of pregnancy tests:  <br />
        </p>
        <ul>
          <li>
            Home pregnancy tests: These are readily available at drugstores and
            can be quite accurate. They typically involve checking your urine for
            a hormone called human chorionic gonadotropin (hCG), which is produced
            by the developing pregnancy.
          </li>
          <li>
            Doctor's office tests: These can be a blood test or an ultrasound.
            Blood tests are more sensitive than home pregnancy tests and can
            detect pregnancy earlier. Ultrasounds use sound waves to create an
            image of the uterus and can confirm pregnancy and check the baby's
            development.
          </li>
        </ul>
      </>
    ),
  },
  neurology: {
    title: "Neurology",
    content: (
      <>
        {/* Replace with relevant content for neurology */}
        <p>Content for neurology goes here.</p>
      </>
    ),
  },
  cardiology: {
    title: "Cardiology",
    content: (
      <>
        {/* Replace with relevant content for cardiology */}
        <p>Content for cardiology goes here.</p>
      </>
    ),
  },
  bloodTest: {
    title: "Blood Test",
    content: (
      <>
        {/* Replace with relevant content for blood test */}
        <p>Content for blood test goes here.</p>
      </>
    ),
  },
};

const Facilities = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h1 className="text-5xl text-black font-semibold mb-2">
          Our New Facilities
        </h1>
      </div>
      <div className="flex justify-center">
        <img src={logo2} alt="" />
      </div>
      <div className="flex justify-center">
        <Tabs aria-label="Tabs with icons" style="underline">
          <Tabs.Item active title={facilityDescriptions.diagnostics.title} icon={HiUserCircle}>
            <div>
              <h1 className="text-3xl font-bold">Diagnostics</h1>
              <hr className="border-pink-500 my-5 w-1/3" />
              {facilityDescriptions.diagnostics.content}
            </div>
          </Tabs.Item>
          <Tabs.Item title={facilityDescriptions.neurology.title} icon={MdDashboard}>
            <div>
              <h1 className="text-3xl font-bold">Neurology</h1>
              <hr className="border-pink-500 my-5 w-1/3" />
             {facilityDescriptions.diagnostics.content}
            </div>
          </Tabs.Item>
          <Tabs.Item title={facilityDescriptions.cardiology.title} icon={HiAdjustments}>
            <div>
              <h1 className="text-3xl font-bold">Cardiology</h1>
              <hr className="border-pink-500 my-5 w-1/3" />
              {facilityDescriptions.diagnostics.content}
            </div>
          </Tabs.Item>
          <Tabs.Item title={facilityDescriptions.bloodTest.title} icon={HiClipboardList}>
            <div>
              <h1 className="text-3xl font-bold">Blood Test</h1>
              <hr className="border-pink-500 my-5 w-1/3" />
              {facilityDescriptions.diagnostics.content}
             
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Facilities;
