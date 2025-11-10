import SearchBar from "../components/SearchBar";

function Heading() {
  return (
    <div className="w-full h-full bg-[url(https://images.unsplash.com/photo-1707301280425-475534ec3cc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071)] bg-cover flex justify-center relative">
      <div className="text-white flex justify-center flex-col gap-3 z-10 p-5">
        <h1 className="text-5xl font-medium capitalize text-center">
          find your dream job today
        </h1>
        <p className="text-md capitalize text-center">
          connecting talent with opportunity : your gateway to carier success
        </p>
        <SearchBar />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#054630]/80 to-transparent"></div>
    </div>
  );
}

export default Heading;
