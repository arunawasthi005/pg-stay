export default function Home() {
  return (
    <div
  className="h-screen flex flex-col items-center justify-center text-white text-center bg-cover bg-center"
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/elijah-pilchard-PkfZ6k0Gozo-unsplash.jpg)`
  }}
>
      <div className="bg-black bg-opacity-50 p-10 rounded-lg mt-1">
        <h1 className="text-4xl md:text-7xl font-bold">Welcome to PG Stay</h1>

        <p className="mt-4 text-lg leading-relaxed max-w-2xl mx-auto ">
          Welcome to <span className="font-semibold">PG Stay</span>, your perfect home away from home.
          We offer clean, spacious, and fully furnished rooms with all the essential amenities
          to make your stay comfortable and hassle-free.
          Our PGs are conveniently located in <span className="font-semibold">Noida</span> and
          <span className="font-semibold"> Greater Noida</span>, with easy access to colleges, offices,
          and public transport.
        </p>

      </div>
    </div>
  );
}
