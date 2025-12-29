import { Banner, Navbar, SideBar, TopHeader } from "./components/index";

const HomePage = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <div className="grid grid-cols-3 p-3">
        <SideBar />
        <Banner />
      </div>
    </>
  )
}

export default HomePage
