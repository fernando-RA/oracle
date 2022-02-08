import React from "react";
import GalleryLayout from "components/GalleryLayout";

const Dashboard = () => {
  return (
    <GalleryLayout
      title="Welcome to Sentient Machine"
      subtitle="Gallery Layout"
    >
      <p>
        What kind of useful information could be displayed here? Let us know in
        the Discord
      </p>
    </GalleryLayout>
  );
};

export default Dashboard;